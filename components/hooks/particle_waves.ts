import { useEffect } from "react";

type Theme = "light" | "dark";
type RGB = readonly [red: number, green: number, blue: number];

interface Palette {
  colors: readonly RGB[];
  opacityScale: number;
}

interface Particle {
  x: number;
  y: number;
  diameter: number;
  duration: number;
  amplitude: number;
  offsetY: number;
  arc: number;
  startTime: number;
  colorIndex: number;
  opacity: number;
}

const NUM_PARTICLES = 600;
const PARTICLE_SIZE = 0.25;
const SPEED = 20_000;
const THEME_TRANSITION_DURATION = 300;

const PALETTES: Record<Theme, Palette> = {
  dark: {
    colors: [
      [200, 95, 50],
      [200, 115, 50], // original orange, centered on the previous random range
      [200, 135, 50],
    ],
    opacityScale: 1,
  },
  light: {
    colors: [
      [49, 116, 143], // primary teal
      [180, 99, 122], // dusty rose
      [150, 84, 0], // restrained warm accent
    ],
    opacityScale: 0.58,
  },
};

function randomBetween(low: number, high: number): number {
  return Math.random() * (high - low) + low;
}

function randomNormal(mean = 0, deviation = 1): number {
  let u = 0;
  let v = 0;

  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  return mean + deviation * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function createParticle(): Particle {
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0.05, randomNormal(PARTICLE_SIZE, PARTICLE_SIZE / 2)),
    duration: Math.max(SPEED * 0.6, randomNormal(SPEED, SPEED * 0.1)),
    amplitude: randomNormal(16, 2),
    offsetY: randomNormal(0, 10),
    arc: Math.PI * 1.6,
    startTime: performance.now() - randomBetween(0, SPEED),
    colorIndex: Math.floor(Math.random() * PALETTES.dark.colors.length),
    opacity: randomBetween(0.16, 0.9),
  };
}

function updateParticle(particle: Particle, time: number): void {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;

  particle.x = progress;
  particle.y = Math.sin(progress * particle.arc) * particle.amplitude + particle.offsetY / 1.3;
}

function smoothstep(edge0: number, edge1: number, value: number): number {
  const normalizedValue = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return normalizedValue * normalizedValue * (3 - 2 * normalizedValue);
}

function mixValue(from: number, to: number, progress: number): number {
  return from + (to - from) * progress;
}

function mixPalette(from: Palette, to: Palette, progress: number): Palette {
  const easedProgress = smoothstep(0, 1, progress);

  return {
    colors: from.colors.map((fromColor, index) => {
      const toColor = to.colors[index];
      return [
        Math.round(mixValue(fromColor[0], toColor[0], easedProgress)),
        Math.round(mixValue(fromColor[1], toColor[1], easedProgress)),
        Math.round(mixValue(fromColor[2], toColor[2], easedProgress)),
      ] as RGB;
    }),
    opacityScale: mixValue(from.opacityScale, to.opacityScale, easedProgress),
  };
}

function getThemePalette(): Palette {
  return document.documentElement.dataset.theme === "light"
    ? PALETTES.light
    : PALETTES.dark;
}

function drawParticle(
  particle: Particle,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  palette: Palette,
): void {
  const viewportHeight = canvas.height / 100;
  const entranceProgress = smoothstep(0, 1, particle.x);
  const y = entranceProgress * particle.y + (1 - entranceProgress) * (particle.y / 2);
  const color = palette.colors[particle.colorIndex];

  context.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${particle.opacity * palette.opacityScale})`;
  context.beginPath();
  context.ellipse(
    particle.x * canvas.width,
    y * viewportHeight + canvas.height / 1.4,
    particle.diameter * viewportHeight,
    particle.diameter * viewportHeight,
    0,
    0,
    2 * Math.PI,
  );
  context.fill();
}

export function useParticleAnimation() {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement | null;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const particles = Array.from({ length: NUM_PARTICLES }, createParticle);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionPreference.matches;
    let animationFrameId: number | undefined;
    let hasRendered = false;
    let fromPalette = getThemePalette();
    let targetPalette = fromPalette;
    let paletteTransitionStartedAt = performance.now();

    const getCurrentPalette = (time: number) => {
      const progress = Math.min(
        1,
        Math.max(0, (time - paletteTransitionStartedAt) / THEME_TRANSITION_DURATION),
      );
      return mixPalette(fromPalette, targetPalette, progress);
    };

    const render = (time: number) => {
      if (!prefersReducedMotion || !hasRendered) {
        particles.forEach((particle) => updateParticle(particle, time));
      }

      const palette = getCurrentPalette(time);
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => drawParticle(particle, canvas, context, palette));
      hasRendered = true;

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.offsetWidth * pixelRatio);
      canvas.height = Math.round(canvas.offsetHeight * pixelRatio);

      if (prefersReducedMotion) render(performance.now());
    };

    const themeObserver = new MutationObserver(() => {
      const now = performance.now();
      const nextPalette = getThemePalette();

      if (nextPalette === targetPalette) return;

      if (prefersReducedMotion) {
        fromPalette = nextPalette;
        targetPalette = nextPalette;
        paletteTransitionStartedAt = now - THEME_TRANSITION_DURATION;
        render(now);
        return;
      }

      fromPalette = getCurrentPalette(now);
      targetPalette = nextPalette;
      paletteTransitionStartedAt = now;
    });

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = undefined;
      }

      if (prefersReducedMotion) {
        render(performance.now());
      } else {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    resizeCanvas();
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    window.addEventListener("resize", resizeCanvas);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);
    if (!prefersReducedMotion) {
      animationFrameId = window.requestAnimationFrame(render);
    }

    return () => {
      if (animationFrameId !== undefined) window.cancelAnimationFrame(animationFrameId);
      themeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);
}

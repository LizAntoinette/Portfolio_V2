import { useEffect } from 'react';

function normal({ mean = 0, dev = 1 } = {}): number {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return mean + dev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }
// Modified version of random-normal function
function normalPool(o: { mean: number, dev: number, pool: number[] }): number {
    let r = 0;
    do {
        const a = Math.round(normal({ mean: o.mean, dev: o.dev }));
        if (a < o.pool.length && a >= 0) return o.pool[a];
        r++;
    } while (r < 100);
    return 0; // fallback return value
}

function randomNormal(o: any): number {
  if (o = Object.assign({ mean: 0, dev: 1, pool: [] }, o), Array.isArray(o.pool) && o.pool.length > 0) return normalPool(o);
  let r: number, a: number, n: number, e: number, l = o.mean, t = o.dev;
  do {
    r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
  } while (r >= 1);
  return e = a * Math.sqrt(-2 * Math.log(r) / r), t * e + l;
}

const NUM_PARTICLES = 600;
const PARTICLE_SIZE = 0.45; // View heights
const SPEED = 25000; // Milliseconds

interface Particle {
  x: number;
  y: number;
  diameter: number;
  duration: number;
  amplitude: number;
  offsetY: number;
  arc: number;
  startTime: number;
  colour: string;
}

let particles: Particle[] = [];

function rand(low: number, high: number): number {
  return Math.random() * (high - low) + low;
}

function createParticle(canvas: HTMLCanvasElement): Particle {
  const colour = {
    r: 215,
    g: randomNormal({ mean: 125, dev: 20 }),
    b: 50,
    a: rand(0, 1),
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
    amplitude: randomNormal({ mean: 16, dev: 2 }),
    offsetY: randomNormal({ mean: 0, dev: 10 }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  };
}

function moveParticle(particle: Particle, canvas: HTMLCanvasElement, time: number): Particle {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
  return {
    ...particle,
    x: progress,
    y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
  };
}

function drawParticle(particle: Particle, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
  const vh = canvas.height / 100;

  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + (canvas.height / 2),
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

function draw(time: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
  particles.forEach((particle, index) => {
    particles[index] = moveParticle(particle, canvas, time);
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    drawParticle(particle, canvas, ctx);
  });

  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  const ctx = canvas.getContext('2d')!;

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  });

  return [canvas, ctx];
}

export function useParticleAnimation() {
  useEffect(() => {
    const [canvas, ctx] = initializeCanvas();

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(createParticle(canvas));
    }

    requestAnimationFrame((time) => draw(time, canvas, ctx));
  }, []);
}

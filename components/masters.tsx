import Image from "next/image";

const mastersProjects = [
  {
    title: "PathFinder",
    description:
      "An interactive pathfinding visualizer implementing BFS, DFS, uniform-cost search, greedy best-first search, and A* with JavaScript and Vue.js.",
    image: "/images/master_code_exer/pathfinder.png",
    imageAlt: "PathFinder interface visualizing a weighted graph and pathfinding controls",
    href: "https://github.com/LizAntoinette/Pathfinding",
    tags: ["Vue.js", "JavaScript", "Algorithms"],
  },
  {
    title: "AI Activity — Backpropagation",
    description:
      "A Java exercise that identifies alphabet characters represented as 7 × 5 matrices using a backpropagation neural network.",
    image: "/images/master_code_exer/backprop.png",
    imageAlt: "Java backpropagation application recognizing a letter from a matrix",
    href: "https://github.com/LizAntoinette/ccs-alpha-bp",
    tags: ["Java", "Neural Networks", "AI"],
  },
  {
    title: "CIT Programming Language Interpreter",
    description:
      "A Programming Languages course project implementing an interpreter for CFPL, a custom programming language.",
    image: "/images/master_code_exer/proginterpreter.png",
    imageAlt: "CFPL interpreter source code and factorial program output",
    href: "https://github.com/LizAntoinette/CIT_PL",
    tags: ["Interpreter", "Language Design", "Course Project"],
  },
] as const;

export default function Masters() {
  return (
    <section id="masters" className="masters-section flex min-h-screen items-center py-28 z-20">
      <div className="mx-auto w-3/4 max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold sm:shrink-0 sm:text-[32px]">
            My <span className="title-name">Master&apos;s Journey</span>
          </h2>
          <span className="section-divider h-px w-full" aria-hidden="true" />
        </div>

        <div className="mb-20 py-4" data-aos="fade-up">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <span className="study-status mb-4 inline-flex rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.12em]">
                In progress
              </span>
              <h2 className="text-2xl font-bold sm:text-3xl">Master of Science in Computer Science</h2>
              <p className="mt-2 text-lg font-semibold company-color">
                Cebu Institute of Technology – University
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-secondary lg:text-lg lg:leading-8">
              Currently working on my thesis. The projects below are selected exercises I completed
              in previous graduate courses covering algorithms, artificial intelligence, and
              programming language implementation.
            </p>
          </div>
        </div>

        <div className="mb-12" data-aos="fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-muted">Selected coursework</p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Exercises &amp; course projects</h3>
        </div>

        <div className="space-y-28 lg:space-y-36">
          {mastersProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className={`masters-exercise flex flex-col items-center gap-10 lg:gap-12 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                data-aos={isReversed ? "fade-right" : "fade-left"}
              >
                <div className="relative w-full lg:w-3/5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="masters-image-link group block focus:outline-none"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 75vw, 50vw"
                        className="masters-exercise-image object-cover object-top"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#EA9D34] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0 ${
                          isReversed ? "div-gradient-right" : "div-gradient-left"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`relative z-10 flex w-full flex-col text-primary lg:w-2/5 ${
                    isReversed ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
                  }`}
                >
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-muted">
                    Graduate coursework
                  </p>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <h4 className="mb-2 text-3xl font-bold leading-tight">{project.title}</h4>
                  </a>
                  <p className="pb-6 text-lg company-color">{project.tags.join(" · ")}</p>

                  <div
                    className={`surface-card max-w-[540px] rounded-2xl px-6 py-5 mb-5 ${
                      isReversed ? "lg:-mr-[112px]" : "lg:-ml-[112px]"
                    }`}
                  >
                    <p className="text-base leading-7">{project.description}</p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-x-4 gap-y-1 ${
                      isReversed ? "justify-start" : "justify-end"
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-1 py-2 text-sm font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="masters-project-link mt-4 inline-flex items-center gap-2 font-bold"
                  >
                    View on GitHub
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

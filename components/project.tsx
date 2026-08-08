import Image from "next/image";
import SectionHeading from "./section_heading";

const projects = [
  {
    title: "Budget Tracker",
    stack: "Spring Boot + React",
    description:
      "A budget tracking app with a user-friendly dashboard and graphs. Users can create, read, update, and delete budget entries to manage their finances more easily.",
    image: "/images/budget-tracker2.png",
    imageAlt: "Budget Tracker dashboard and financial summary",
    href: "https://github.com/LizAntoinette/budget-tracker-frontend",
    tags: ["Java", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Simple Task Scheduler",
    stack: "Django + Angular",
    description:
      "A task scheduling website where users can create, read, update, and delete tasks, making it easier to stay organized and manage their time.",
    image: "/images/task4.png",
    imageAlt: "Simple Task Scheduler interface",
    href: "https://github.com/LizAntoinette/Scheduler",
    tags: ["Python", "Angular", "GraphQL", "Sass", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Translator & Learning Tool with AI",
    stack: "Express.js + Vue.js",
    description:
      "A language-learning app that translates text, provides exercises, and lets users chat with an AI for a more interactive learning experience.",
    image: "/images/trans.png",
    imageAlt: "AI translator and language-learning interface",
    href: "https://github.com/LizAntoinette/Translator",
    tags: ["Node.js", "Vue.js", "JavaScript", "Tailwind CSS", "Firebase"],
  },
] as const;

export default function Project() {
  return (
    <section id="project" className="flex flex-grow py-20 sm:py-24 lg:py-28 z-20">
      <div className="mx-auto flex w-[calc(100%_-_2rem)] max-w-6xl flex-col sm:w-4/5 lg:w-3/4">
        <SectionHeading className="mb-12" data-aos="fade-up">
          My <span className="title-name">Personal Projects</span>
        </SectionHeading>

        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className={`flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                data-aos={isReversed ? "fade-right" : "fade-left"}
              >
                <div className="relative w-full lg:w-3/5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-image-link group block focus:outline-none"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#EA9D34] to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-0 ${
                          isReversed ? "div-gradient-right" : "div-gradient-left"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`relative z-10 flex w-full flex-col text-left text-primary lg:w-2/5 ${
                    isReversed ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
                  }`}
                >
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="mb-2 text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h3>
                  </a>
                  <p className="pb-6 text-lg company-color">{project.stack}</p>

                  <div
                    className="portfolio-project-description mb-5 w-full max-w-[540px]"
                  >
                    <p className="text-base leading-7">{project.description}</p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-x-4 gap-y-1 ${
                      isReversed ? "justify-start" : "justify-start lg:justify-end"
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-1 py-2 text-sm font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

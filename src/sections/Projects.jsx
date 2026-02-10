export default function Projects() {
  const projects = [
    {
      title: "Board Game Connections App",
      description:
        "A web and Android app for board game enthusiasts to find local gaming groups, events, and host their own games.",
      tech: "Flutter · Firebase · Android · Architecture",
    },
    {
      title: "Placeholder Project",
      description:
        "Description for a future project. This space can highlight a technical challenge or learning experience.",
      tech: "React · Tailwind · API Design",
    },
    {
      title: "Placeholder Project",
      description:
        "Another upcoming project showcasing problem solving, performance, or system design skills.",
      tech: "C++ · Algorithms · Systems",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  project-card
                  p-6
                  border border-gray-800
                  rounded-xl
                  bg-zinc-900/50
                  transition-all
                  card-hover
                "
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="mt-4 text-xs text-gray-400">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
/* Add github links to project cards */
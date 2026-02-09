import Reveal from "../components/Reveal"

export default function Projects() {
  const projects = [
    {
      title: "Board Game Connections App",
      description:
        "A web and android app for board game enthusiasts to find local gaming groups, events, and to host their own events.",
      tech: "Android · Flutter · Firebase · Software Architecture",
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 md:px-8">
      <h2 className="text-3xl font-semibold mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <div
              className="
                border border-gray-700 rounded-xl p-6
                card-hover
              "
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                {project.tech}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

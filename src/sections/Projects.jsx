import Reveal from "../components/Reveal"
import {
  FaGithub,
} from "react-icons/fa"
export default function Projects() {
  const projects = [
    {
      title: "Board Game Connections App",
      description:
        "A web and Android app for board game enthusiasts to find local gaming groups, events, and host their own games.",
      tech: "Flutter · Firebase · Android · Architecture",
      link: ""
    },
    {
      title: "Multi-Round Cipher",
      description:
        "A multi-round cipher based on Vigenere and Columnar Transposition ciphers, designed to encrypt different blocks with a basic level of security. Not meant to be used for real security, but to demonstrate the design and implementation of a custom cipher system.",
      tech: "Java · Algorithms · Systems",
      link:"https://github.com/ItsArgon/Multi-round-Cipher.git"
    },
    {
      title: "Guitar Tabs App (Songsterr Clone)",
      description:
        "Another upcoming project showcasing problem solving, performance, and system design skills.",
      tech: "React · Firebase · Web Development",
      link: ""
    },
    {
      title: "ArgonMod - Minecraft Mod",
      description: 
        "A Minecraft mod that performs an automatic fishing action based on viewing an armorstand marked with a specific tag. Also includes a custom command, config file, and GUI for adjusting settings. Currently made using Forge for Minecraft 1.8.9, but will be ported to 1.21.10 and Fabric.",
      tech: "Java · Minecraft Modding · Forge",
      link: "https://github.com/ItsArgon/ArgonMod.git"
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                project-card
                relative
                p-6
                border border-gray-800
                rounded-xl
                bg-zinc-900/50
                transition-all
                card-hover
              "
            >
              {/* GitHub icon */}
              <FaGithub
                className="
                  absolute
                  top-4
                  right-4
                  text-gray-400
                  opacity-70
                  transition
                  group-hover:text-white
                  group-hover:opacity-100
                "
                size={18}
              />

              <h3 className="text-xl font-semibold">{project.title}
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <p className="mt-4 text-xs text-gray-400">
                {project.tech}
              </p>
            </a>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
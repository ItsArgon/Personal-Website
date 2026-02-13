import Reveal from "../components/Reveal"
import {
  FaGithub,
} from "react-icons/fa"
export default function Projects() {
  const projects = [
    {
      title: "ArgonMod - Minecraft Mod",
      description: 
        "A Minecraft mod that performs an automatic fishing action based on viewing an armorstand marked with a specific tag. Also includes a custom command, config file, and GUI for adjusting settings. Currently made using Forge for Minecraft 1.8.9, but will be ported to 1.21.10 and Fabric.",
      tech: "Java · Minecraft Modding · Forge",
      link: "https://github.com/ItsArgon/ArgonMod.git"
    },
    {
      title: "BoardUp - Board Game Meetup App",
      description:
        "A web and Android app for board game enthusiasts to find local gaming groups, events, and host their own games.",
      tech: "Flutter · Firebase · Android · Architecture",
      link: "https://github.com/ItsArgon/BoardUp.git"
    },
    {
      title: "Guitar Tabs App (Songsterr Clone)",
      description:
        "Another upcoming project showcasing problem solving, performance, and system design skills.",
      tech: "React · Firebase · Web Development",
      link: "https://github.com/ItsArgon/EasyTabs.git"
    },
    {
      title: "Multi-Round Cipher",
      description:
        "A multi-round cipher based on Vigenere and Columnar Transposition ciphers, designed to encrypt different blocks with a basic level of security. Not meant to be used for real security, but to demonstrate the design and implementation of a custom cipher system.",
      tech: "Java · Algorithms · Systems",
      link:"https://github.com/ItsArgon/Multi-round-Cipher.git"
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                overflow-hidden
                p-6
                border border-gray-800
                rounded-xl
                bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-900/20
                backdrop-blur-sm
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                card-hover
              "
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* GitHub icon */}
              <div className="absolute top-4 right-4 z-10">
                <FaGithub
                  className="
                    text-gray-400
                    opacity-70
                    transition
                    group-hover:text-purple-400
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                  size={20}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 font-medium">
                    {project.tech}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                  View on GitHub
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
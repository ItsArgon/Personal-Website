import Reveal from "../components/Reveal"
import {
  FaJava,
  FaReact,
  FaMobileAlt,
  FaDatabase,
  FaGithub,
  FaLinux,
  FaCode,
  FaProjectDiagram,
  FaChartBar,
  FaSync,
} from "react-icons/fa"

export default function Skills() {
  const skillCategories = [
    {
      name: "Languages & Frameworks",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "C++", icon: FaCode },
        { name: "React", icon: FaReact },
        { name: "Flutter", icon: FaMobileAlt },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Firebase", icon: FaDatabase },
        { name: "Git", icon: FaGithub },
        { name: "Linux", icon: FaLinux },
      ],
    },
    {
      name: "Core Concepts",
      skills: [
        { name: "Agile", icon: FaSync},
        { name: "Algorithms", icon: FaCode },
        { name: "Data Structures", icon: FaChartBar},
        { name: "System Design", icon: FaProjectDiagram },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Skills</h2>

        <Reveal>
          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg font-semibold text-purple-400">
                    {category.name}
                  </h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="
                        flex flex-col items-center
                        p-6
                        border border-gray-800
                        rounded-lg
                        bg-gray-900/40
                        hover:bg-gray-900/70
                        hover:border-purple-500
                        transition-all
                        duration-300
                        group
                        cursor-pointer
                      "
                    >
                      <Icon className="text-2xl sm:text-3xl text-gray-400 mb-3 group-hover:text-purple-400 transition-colors" />
                      <p className="text-sm text-gray-300 text-center group-hover:text-white transition-colors font-medium">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
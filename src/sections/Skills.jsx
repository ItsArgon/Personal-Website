import Reveal from "../components/Reveal"
import {
  FaJava,
  FaReact,
  FaAndroid, 
  FaDatabase,
  FaGithub,
  FaLinux,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa"

export default function Skills() {
  const skills = [
    { name: "Java", icon: FaJava },
    { name: "C++", icon: FaCode },
    { name: "React", icon: FaReact },
    { name: "Flutter", icon: FaAndroid },
    { name: "Firebase", icon: FaDatabase },
    { name: "Git", icon: FaGithub },
    { name: "Linux", icon: FaLinux },
    { name: "Data Structures", icon: FaProjectDiagram },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>

      <Reveal>
        <ul className="flex flex-wrap gap-4">
          {skills.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="
                flex items-center gap-2
                px-4 py-2
                border border-gray-700 rounded-full
                text-sm text-gray-300
                card-hover
                hover:text-gray-200
              "
            >
              <Icon className="text-base text-gray-400" />
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
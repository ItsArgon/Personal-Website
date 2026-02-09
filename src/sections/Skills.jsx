export default function Skills() {
  
  return (
    <section id="skills" className="py-32 px-8">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>

      <ul className="flex flex-wrap gap-3">
        {["C++", "Data Structures", "Flutter", "Firebase", "Git", "Java", "Linux", "React"].map(skill => (
          <li
            key={skill}
            className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300 card-hover hover:text-gray-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

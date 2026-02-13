import Reveal from "../components/Reveal"

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">About Me</h2>

        <Reveal>
          <div className="space-y-4">
            {/* Intro Section */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a third-year Computer Science student at the University of Minnesota Duluth passionate about
                building scalable systems and intuitive user interfaces. I specialize in full-stack development
                with a focus on backend architecture and data-driven applications. I am also interested in Computer 
                Security and general Software Engineering best practices.
              </p>
            </div>

            {/* My Approach Section */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating products that solve real problems.
                I enjoy working on challenging projects from conception to deployment, and I'm always eager to learn
                new technologies and best practices.
              </p>
            </div>

            {/* Experience & Skills Section */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Experience & Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 flex-shrink-0 mt-1">•</span>
                  <span>Full-stack development: React, Java, Firebase, Flutter</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 flex-shrink-0 mt-1">•</span>
                  <span>Strong foundation in algorithms, data structures, and system design</span>
                </li>
              </ul>
            </div>

            {/* What I'm Looking For Section */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">What I'm Looking For</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm interested in roles where I can contribute to meaningful products, grow as an engineer,
                and work alongside experienced developers. I am keen to take on challenges that allow me to
                apply my skills and learn from others in a collaborative environment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

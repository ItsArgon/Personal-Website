import Intro from './sections/Intro'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <main className="max-w-6xl mx-auto">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App

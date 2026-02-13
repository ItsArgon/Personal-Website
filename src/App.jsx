import Navbar from './components/Navbar'
import Intro from './sections/Intro'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      {/* Background layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Content layer */}
      <main className="relative max-w-6xl mx-auto px-6">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App

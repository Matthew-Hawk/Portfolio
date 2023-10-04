import './App.scss'
import Navagation from './components/navagation/navagation' 
import Head from './components/head/head'
import About from './components/about/about'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Foot from "./components/foot/foot"

function App() {

  return (
    <>
      <Navagation></Navagation>
      <Head></Head>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Foot></Foot>
    </>
  )
}

export default App

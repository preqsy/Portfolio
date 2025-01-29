import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Education from './Education.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Header />
    <Hero />
    <About />
    <Education />
  </>
)

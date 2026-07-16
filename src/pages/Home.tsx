import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { Experience } from '../components/sections/Experience'
import { Certifications } from '../components/sections/Certifications'
import { Achievements } from '../components/sections/Achievements'
import { Education } from '../components/sections/Education'
import { Github } from '../components/sections/Github'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Education />
      <Github />
      <Contact />
    </>
  )
}

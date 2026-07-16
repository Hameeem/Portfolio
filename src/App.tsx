import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { BackToTop } from './components/layout/BackToTop'
import { CustomCursor } from './components/layout/CustomCursor'
import { ParticleBackground } from './components/layout/ParticleBackground'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Portfolio/">
        <LoadingScreen />
        <CustomCursor />
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Overview from './components/Overview/Overview'
import Features from './components/Features/Features'
import Details from './components/Details/Details'
import Lifestyle from './components/Lifestyle/Lifestyle'
import Showcase from './components/Showcase/Showcase'
import BrandingPage from './pages/BrandingPage'
import './App.css'

const isBranding = window.location.pathname === '/branding'

function App() {
  if (isBranding) return <BrandingPage />

  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <Details />
      <Lifestyle />
      <Showcase />
    </>
  )
}

export default App

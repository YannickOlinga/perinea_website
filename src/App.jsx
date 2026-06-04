import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Overview from './components/Overview/Overview'
import Features from './components/Features/Features'
import Details from './components/Details/Details'
import Lifestyle from './components/Lifestyle/Lifestyle'
import Showcase from './components/Showcase/Showcase'
import BrandingPage from './pages/BrandingPage'
import ProductPage from './pages/ProductPage'
import AppPage from './pages/AppPage'
import LegalPage from './pages/LegalPage'
import './App.css'

const LEGAL_ROUTES = ['/mentions-legales', '/confidentialite', '/garantie', '/retours']
const path = window.location.pathname

function App() {
  if (path === '/branding')    return <BrandingPage />
  if (path === '/perinea-one') return <ProductPage />
  if (path === '/app')         return <AppPage />
  if (LEGAL_ROUTES.includes(path)) return <LegalPage />

  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <Details />
      <Lifestyle />
      <Showcase />
      <Footer />
    </>
  )
}

export default App

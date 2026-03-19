import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <>

      {/* Ticker */}

      <div className="ticker">
        <span className="ticker-inner">
          “Your Journey, Your Story.” ✦ “Your Journey, Your Story.” ✦ “Your Journey, Your Story.”
        </span>
      </div>

      <Header />

      <HeroSection />

      <MainContent />
      {/* <Footer /> */}

    </>
  )
}
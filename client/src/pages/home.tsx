import Hero from '../components/homepage/hero'
import Subhero from '../components/homepage/subhero'
import Stats from '../components/homepage/stats'
import Team from '../components/homepage/team'
import CTA from '../components/homepage/cta'
import FAQ from '../components/homepage/faq'
import Footer from '../components/homepage/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Subhero />
      <Stats />
      <Team />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

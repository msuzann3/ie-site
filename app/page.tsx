import Hero from '@/components/home/Hero'
import FeaturedDownload from '@/components/home/FeaturedDownload'
import Duality from '@/components/home/Duality'
import Services from '@/components/home/Services'
import AIReadiness from '@/components/home/AIReadiness'
import Philosophy from '@/components/home/Philosophy'
import Team from '@/components/home/Team'
import Newsletter from '@/components/home/Newsletter'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDownload />
      <Duality />
      <Services />
      <Newsletter />
      <AIReadiness />
      <Philosophy />
      <Team />
      <Contact />
    </>
  )
}

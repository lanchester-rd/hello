import Hero from '../components/Hero'
import EngagementCards from '../components/EngagementCards'
import SelectedWork from '../components/SelectedWork'
import Philosophy from '../components/Philosophy'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <EngagementCards />
      </section>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <SelectedWork />
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-24">
        <Philosophy />
      </section>
      <Footer />
    </>
  )
}

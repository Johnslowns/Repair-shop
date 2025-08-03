import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import CTA from '../components/CTA'
import ContentSection from '../components/ContentSection'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map'




export default function Home(){

    return(
        <>
        <main>
        <Hero />
        <ValueProps />
        <ContentSection />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>


        </>
    )
}
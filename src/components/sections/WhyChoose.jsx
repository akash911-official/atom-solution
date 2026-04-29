import { whyChooseData } from '../../data/whyChooseData'
import FeatureCard from '../ui/FeatureCard'
import SectionHeading from '../ui/SectionHeading'

function WhyChoose() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-28 lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1404px] px-6 sm:px-8 xl:px-0">
        <SectionHeading
          title="Why Choose Atom"
          description="We combine expertise, innovation, and dedication to deliver exceptional results for your business."
        />
        <div className="mt-20 grid gap-14 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseData.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

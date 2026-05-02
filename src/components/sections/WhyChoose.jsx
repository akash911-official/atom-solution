import { whyChooseData } from '../../data/whyChooseData'
import FeatureCard from '../ui/FeatureCard'
import SectionHeading from '../ui/SectionHeading'

function WhyChoose() {
  return (
    <section id="why-us" className="bg-white py-12 md:py-16 lg:py-20 xl:py-[110px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="Why Choose Atom"
          description="We combine expertise, innovation, and dedication to deliver exceptional results for your business."
        />
        <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 md:gap-12 lg:mt-16 xl:mt-20 xl:grid-cols-4 xl:gap-14">
          {whyChooseData.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

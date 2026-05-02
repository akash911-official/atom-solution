import { servicesData } from '../../data/servicesData'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-blush py-12 md:py-16 lg:py-20 xl:py-[110px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="Our Services"
          description="Comprehensive solutions designed to accelerate your business growth and maximize your market potential."
        />
        <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:gap-8 xl:mt-20 xl:grid-cols-4 xl:gap-9">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import { servicesData } from '../../data/servicesData'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-blush py-24 md:py-28 lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1404px] px-6 sm:px-8 xl:px-0">
        <SectionHeading
          title="Our Services"
          description="Comprehensive solutions designed to accelerate your business growth and maximize your market potential."
        />
        <div className="mt-20 grid gap-9 md:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

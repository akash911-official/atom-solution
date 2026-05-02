import { testimonialsData } from '../../data/testimonialsData'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'

function Testimonials() {
  return (
    <section id="testimonials" className="bg-blush py-12 md:py-16 lg:py-20 xl:py-[90px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
        />
        <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8 xl:mt-[72px] xl:gap-9">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

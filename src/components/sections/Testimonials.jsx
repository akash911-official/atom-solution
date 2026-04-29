import { testimonialsData } from '../../data/testimonialsData'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'

function Testimonials() {
  return (
    <section id="testimonials" className="bg-blush py-24 md:py-28 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1404px] px-6 sm:px-8 xl:px-0">
        <SectionHeading
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
        />
        <div className="mt-[72px] grid gap-9 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

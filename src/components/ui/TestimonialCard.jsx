import { Star } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-card sm:min-h-[320px] sm:p-7 lg:min-h-[350px] lg:p-9">
      <div className="flex gap-1.5 text-primary sm:gap-2" aria-label={`${testimonial.rating} stars`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            aria-hidden="true"
            fill="currentColor"
            key={index}
            className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
            strokeWidth={1.8}
          />
        ))}
      </div>
      <blockquote className="mt-5 text-sm leading-6 text-ink sm:mt-7 sm:text-base sm:leading-7 lg:mt-8">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-auto flex items-center gap-4 pt-7 sm:gap-5 lg:pt-9">
        <img
          src={testimonial.avatar}
          alt=""
          className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-[58px] sm:w-[58px]"
          loading="lazy"
        />
        <div>
          <p className="text-base font-extrabold leading-tight text-ink sm:text-lg lg:text-xl">
            {testimonial.name}
          </p>
          <p className="mt-1 text-sm text-body sm:text-base lg:text-lg">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard

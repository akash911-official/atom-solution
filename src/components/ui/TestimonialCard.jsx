import { Star } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full min-h-[350px] flex-col rounded-lg bg-white p-9 shadow-card">
      <div className="flex gap-2 text-primary" aria-label={`${testimonial.rating} stars`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            aria-hidden="true"
            fill="currentColor"
            key={index}
            size={22}
            strokeWidth={1.8}
          />
        ))}
      </div>
      <blockquote className="mt-8 text-base leading-7 text-ink">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-auto flex items-center gap-5 pt-9">
        <img
          src={testimonial.avatar}
          alt=""
          className="h-[58px] w-[58px] rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-xl font-extrabold leading-tight text-ink">
            {testimonial.name}
          </p>
          <p className="mt-1 text-lg text-body">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard

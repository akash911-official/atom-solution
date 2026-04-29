import { ArrowRight } from 'lucide-react'

function ProcessCard({ item, showArrow = false }) {
  return (
    <article className="relative h-full min-h-[347px] rounded-lg border border-line bg-white p-9 shadow-card">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-white">
        {item.step}
      </div>
      <h3 className="mt-10 text-[28px] font-extrabold leading-tight text-ink">
        {item.title}
      </h3>
      <p className="mt-6 text-base leading-7 text-body">{item.description}</p>
      {showArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 text-primary xl:block"
          size={36}
          strokeWidth={2.4}
        />
      ) : null}
    </article>
  )
}

export default ProcessCard

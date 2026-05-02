import { ArrowRight } from 'lucide-react'

function ProcessCard({ item, showArrow = false }) {
  return (
    <article className="relative h-full rounded-lg border border-line bg-white p-6 shadow-card sm:min-h-[300px] sm:p-7 lg:p-8 xl:min-h-[347px] xl:p-9">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white sm:h-14 sm:w-14 sm:text-xl lg:h-16 lg:w-16 lg:text-2xl">
        {item.step}
      </div>
      <h3 className="mt-6 text-2xl font-extrabold leading-tight text-ink sm:mt-8 lg:mt-10 lg:text-[28px]">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-body sm:text-base sm:leading-7 lg:mt-6">
        {item.description}
      </p>
      {showArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="absolute -right-10 top-1/2 z-10 hidden -translate-y-1/2 text-primary xl:block"
          size={36}
          strokeWidth={2.4}
        />
      ) : null}
    </article>
  )
}

export default ProcessCard

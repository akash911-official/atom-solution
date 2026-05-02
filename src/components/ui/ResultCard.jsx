function ResultCard({ result }) {
  return (
    <article className="rounded-xl bg-cream p-5 shadow-soft sm:p-6 lg:rounded-2xl lg:p-8">
      <img
        src={result.image}
        alt=""
        className="aspect-[16/9] w-full rounded-lg object-cover lg:h-[194px] lg:rounded-xl"
        loading="lazy"
      />
      <h3 className="mt-6 font-heading text-2xl font-extrabold leading-tight text-ink lg:mt-9 lg:text-[31px]">
        {result.title}
      </h3>
      <dl className="mt-5 space-y-4 sm:space-y-5 lg:mt-7 lg:space-y-6">
        {result.metrics.map((metric) => (
          <div
            className="flex items-baseline justify-between gap-4"
            key={metric.label}
          >
            <dt className="text-sm text-body sm:text-base lg:text-lg">{metric.label}</dt>
            <dd className="shrink-0 font-heading text-2xl font-extrabold leading-none text-primary sm:text-3xl lg:text-[31px]">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-sm leading-6 text-body sm:text-base sm:leading-7 lg:mt-7">
        {result.description}
      </p>
    </article>
  )
}

export default ResultCard

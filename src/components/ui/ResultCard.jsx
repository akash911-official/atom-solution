function ResultCard({ result }) {
  return (
    <article className="rounded-2xl bg-cream p-8 shadow-soft">
      <img
        src={result.image}
        alt=""
        className="h-[194px] w-full rounded-xl object-cover"
        loading="lazy"
      />
      <h3 className="mt-9 font-heading text-[31px] font-extrabold leading-tight text-ink">
        {result.title}
      </h3>
      <dl className="mt-7 space-y-6">
        {result.metrics.map((metric) => (
          <div
            className="flex items-baseline justify-between gap-6"
            key={metric.label}
          >
            <dt className="text-lg text-body">{metric.label}</dt>
            <dd className="font-heading text-[31px] font-extrabold leading-none text-primary">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-7 text-base leading-7 text-body">{result.description}</p>
    </article>
  )
}

export default ResultCard

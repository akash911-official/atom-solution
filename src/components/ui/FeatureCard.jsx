import { ChartNoAxesCombined, Handshake, Trophy } from 'lucide-react'

const iconMap = {
  trophy: Trophy,
  analytics: ChartNoAxesCombined,
  partner: Handshake,
}

function FeatureCard({ feature }) {
  const Icon = iconMap[feature.icon]

  return (
    <article className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white sm:h-20 sm:w-20 lg:h-[92px] lg:w-[92px]">
        {feature.stat ? (
          <span className="text-2xl font-extrabold sm:text-3xl">{feature.stat}</span>
        ) : (
          <Icon aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10" strokeWidth={2.7} />
        )}
      </div>
      <h3 className="mt-5 text-xl font-extrabold leading-tight text-ink sm:mt-7 sm:text-2xl lg:mt-9">
        {feature.title}
      </h3>
      <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-body sm:mt-5 sm:text-base sm:leading-7">
        {feature.description}
      </p>
    </article>
  )
}

export default FeatureCard

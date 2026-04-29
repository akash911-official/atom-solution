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
      <div className="mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full bg-primary text-white">
        {feature.stat ? (
          <span className="text-3xl font-extrabold">{feature.stat}</span>
        ) : (
          <Icon aria-hidden="true" size={38} strokeWidth={2.7} />
        )}
      </div>
      <h3 className="mt-9 text-2xl font-extrabold leading-tight text-ink">
        {feature.title}
      </h3>
      <p className="mx-auto mt-5 max-w-[310px] text-base leading-7 text-body">
        {feature.description}
      </p>
    </article>
  )
}

export default FeatureCard

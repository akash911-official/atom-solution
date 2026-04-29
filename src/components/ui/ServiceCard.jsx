import {
  BriefcaseBusiness,
  ChartLine,
  Palette,
  Target,
} from 'lucide-react'

const iconMap = {
  growth: ChartLine,
  target: Target,
  brand: Palette,
  consulting: BriefcaseBusiness,
}

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || ChartLine

  return (
    <article className="h-full min-h-[365px] rounded-lg border border-line bg-white p-9 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-9 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <Icon aria-hidden="true" size={32} strokeWidth={2.8} />
      </div>
      <h3 className="text-[23px] font-extrabold leading-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-6 text-base leading-7 text-body">{service.description}</p>
    </article>
  )
}

export default ServiceCard

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
    <article className="h-full rounded-lg border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft sm:min-h-[320px] sm:p-7 lg:p-8 xl:min-h-[365px] xl:p-9">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary sm:h-14 sm:w-14 lg:mb-9 lg:h-16 lg:w-16">
        <Icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" strokeWidth={2.8} />
      </div>
      <h3 className="text-xl font-extrabold leading-tight text-ink sm:text-[22px] xl:text-[23px]">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-body sm:text-base sm:leading-7 lg:mt-6">
        {service.description}
      </p>
    </article>
  )
}

export default ServiceCard

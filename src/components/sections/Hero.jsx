import heroDashboard from '../../assets/images/hero-dashboard.png'
import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '98%', label: 'Client Retention' },
]

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1404px] items-center gap-14 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,660px)_676px] lg:gap-[68px] lg:py-[68px] xl:px-0">
        <div className="max-w-[700px]">
          <h1 className="font-heading text-[52px] font-extrabold leading-[1.02] text-ink sm:text-[64px] lg:text-[64px]">
            Transform Your
            <br />
            <span className="whitespace-nowrap">
              Business with <span className="text-primary">Data-</span>
            </span>
            <br />
            <span className="text-primary">Driven Strategy</span>
          </h1>
          <p className="mt-10 max-w-[680px] text-xl leading-9 text-body sm:text-[24px] sm:leading-[1.65]">
            We help ambitious businesses achieve measurable growth through
            strategic marketing, performance optimization, and proven business
            consulting.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <PrimaryButton href="#cta" size="lg" className="w-full sm:w-auto">
              Book Free Consultation
            </PrimaryButton>
            <SecondaryButton href="#services" size="lg" className="w-full sm:w-auto">
              View Services
            </SecondaryButton>
          </div>
          <dl className="mt-16 grid max-w-[560px] grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-0">
            {stats.map((stat, index) => (
              <div
                className={index === 0 ? '' : 'sm:border-l sm:border-line sm:pl-10'}
                key={stat.label}
              >
                <dt className="text-base text-ink">{stat.label}</dt>
                <dd className="mb-2 text-[36px] font-extrabold leading-none text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroDashboard}
            alt="Marketing analytics dashboard with growth charts"
            className="aspect-square w-full max-w-[676px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

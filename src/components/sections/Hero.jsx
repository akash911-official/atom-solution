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
      <div className="mx-auto grid w-full max-w-[1404px] items-center gap-9 px-4 py-12 sm:gap-11 sm:px-6 sm:py-14 md:py-16 lg:grid-cols-[minmax(0,660px)_minmax(420px,676px)] lg:gap-[68px] lg:px-8 lg:py-[68px] 2xl:px-0">
        <div className="mx-auto max-w-[700px] text-center lg:mx-0 lg:text-left">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.02]">
            Transform Your
            <br />
            <span className="2xl:whitespace-nowrap">
              Business with <span className="text-primary">Data-</span>
            </span>
            <br />
            <span className="text-primary">Driven Strategy</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-sm leading-6 text-body sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0 lg:mt-10 lg:text-xl lg:leading-9 xl:text-[24px] xl:leading-[1.65]">
            We help ambitious businesses achieve measurable growth through
            strategic marketing, performance optimization, and proven business
            consulting.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-5 lg:mt-10 lg:justify-start">
            <PrimaryButton href="#cta" size="lg" className="w-full sm:w-auto">
              Book Free Consultation
            </PrimaryButton>
            <SecondaryButton href="#services" size="lg" className="w-full sm:w-auto">
              View Services
            </SecondaryButton>
          </div>
          <dl className="mx-auto mt-8 grid max-w-[560px] gap-2 sm:mt-10 grid-cols-3 sm:gap-0 lg:mx-0 lg:mt-16">
            {stats.map((stat, index) => (
              <div
                className={index === 0 ? 'py-1' : 'py-1 border-l sm:border-line sm:pl-6 lg:pl-10'}
                key={stat.label}
              >
                <dd className="text-3xl font-extrabold leading-none text-primary sm:text-[32px] lg:text-[36px]">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-xs text-ink sm:text-base">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroDashboard}
            alt="Marketing analytics dashboard with growth charts"
            className="aspect-square w-full max-w-[520px] object-cover md:max-w-[620px] lg:max-w-[676px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'

function CTA() {
  return (
    <section id="cta" className="bg-primary-dark py-12 text-white md:py-16 lg:py-20 xl:py-[118px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-3xl md:text-3xl lg:text-4xl xl:text-[54px] xl:leading-[1.1]">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-5 max-w-[900px] text-sm leading-6 text-white sm:text-base sm:leading-7 md:mt-6 lg:mt-8 lg:text-xl lg:leading-9 xl:text-[24px] xl:leading-[1.55]">
          Schedule a free consultation with our experts and discover how we can
          help you achieve measurable growth. No obligations, just actionable
          insights.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5 lg:mt-12">
          <PrimaryButton
            href="#"
            size="lg"
            variant="light"
            className="w-full sm:w-auto sm:min-w-[320px] lg:min-w-[380px]"
          >
            Book Your Free Consultation
          </PrimaryButton>
          <SecondaryButton
            href="#results"
            size="lg"
            variant="light"
            className="w-full sm:w-auto sm:min-w-[240px] lg:min-w-[284px]"
          >
            View Case Studies
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default CTA

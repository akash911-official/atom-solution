import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'

function CTA() {
  return (
    <section id="cta" className="bg-primary-dark py-24 text-white md:py-28 lg:py-[118px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 text-center sm:px-8">
        <h2 className="font-heading text-4xl font-extrabold leading-[1.1] md:text-[54px]">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-8 max-w-[900px] text-xl leading-9 text-white md:text-[24px] md:leading-[1.55]">
          Schedule a free consultation with our experts and discover how we can
          help you achieve measurable growth. No obligations, just actionable
          insights.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <PrimaryButton
            href="#"
            size="lg"
            variant="light"
            className="w-full sm:w-auto sm:min-w-[380px]"
          >
            Book Your Free Consultation
          </PrimaryButton>
          <SecondaryButton
            href="#results"
            size="lg"
            variant="light"
            className="w-full sm:w-auto sm:min-w-[284px]"
          >
            View Case Studies
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default CTA

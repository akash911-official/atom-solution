import { processData } from '../../data/processData'
import ProcessCard from '../ui/ProcessCard'
import SectionHeading from '../ui/SectionHeading'

function Process() {
  return (
    <section id="process" className="bg-blush py-12 md:py-16 lg:py-20 xl:py-[86px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="Our Process"
          description="A proven methodology that transforms challenges into opportunities and delivers consistent results."
        />
        <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:gap-8 xl:mt-[72px] xl:grid-cols-4 xl:gap-9">
          {processData.map((item, index) => (
            <ProcessCard
              item={item}
              key={item.step}
              showArrow={index < processData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

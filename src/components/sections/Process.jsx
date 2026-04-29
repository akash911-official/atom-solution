import { processData } from '../../data/processData'
import ProcessCard from '../ui/ProcessCard'
import SectionHeading from '../ui/SectionHeading'

function Process() {
  return (
    <section id="process" className="bg-blush py-24 md:py-28 lg:py-[86px]">
      <div className="mx-auto w-full max-w-[1404px] px-6 sm:px-8 xl:px-0">
        <SectionHeading
          title="Our Process"
          description="A proven methodology that transforms challenges into opportunities and delivers consistent results."
        />
        <div className="mt-[72px] grid gap-9 md:grid-cols-2 xl:grid-cols-4">
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

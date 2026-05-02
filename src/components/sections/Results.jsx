import { resultsData } from '../../data/resultsData'
import ResultCard from '../ui/ResultCard'
import SectionHeading from '../ui/SectionHeading'

function Results() {
  return (
    <section id="results" className="bg-primary-dark py-12 md:py-16 lg:py-20 xl:py-[72px]">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Results That Speak"
          description="Real businesses, real growth, real impact. See how we've helped our clients achieve their goals."
        />
        <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8 xl:gap-9">
          {resultsData.map((result) => (
            <ResultCard key={result.title} result={result} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results

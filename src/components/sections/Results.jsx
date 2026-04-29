import { resultsData } from '../../data/resultsData'
import ResultCard from '../ui/ResultCard'
import SectionHeading from '../ui/SectionHeading'

function Results() {
  return (
    <section id="results" className="bg-primary-dark py-24 md:py-28 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-8">
        <SectionHeading
          light
          title="Results That Speak"
          description="Real businesses, real growth, real impact. See how we've helped our clients achieve their goals."
        />
        <div className="mt-14 grid gap-9 lg:grid-cols-3">
          {resultsData.map((result) => (
            <ResultCard key={result.title} result={result} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results

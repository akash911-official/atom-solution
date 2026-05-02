import { cn } from '../../lib/utils'

function SectionHeading({ title, description, light = false, className }) {
  return (
    <div className={cn('mx-auto max-w-[820px] text-center', className)}>
      <h2
        className={cn(
          'font-heading text-2xl font-extrabold leading-tight sm:text-3xl md:text-3xl lg:text-4xl xl:text-[54px] xl:leading-[1.08]',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mx-auto mt-4 max-w-[820px] text-sm leading-6 sm:text-base sm:leading-7 md:mt-6 lg:mt-7 lg:text-[22px] lg:leading-8',
            light ? 'text-white' : 'text-body',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading

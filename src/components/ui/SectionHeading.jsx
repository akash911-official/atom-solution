import { cn } from '../../lib/utils'

function SectionHeading({ title, description, light = false, className }) {
  return (
    <div className={cn('mx-auto max-w-[820px] text-center', className)}>
      <h2
        className={cn(
          'font-heading text-4xl font-extrabold leading-[1.08] md:text-[54px]',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mx-auto mt-7 max-w-[820px] text-lg leading-8 md:text-[22px]',
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

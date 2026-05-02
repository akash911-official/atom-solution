import { cn } from '../../lib/utils'

const sizeClasses = {
  md: 'min-h-12 px-6 text-sm sm:min-h-[58px] sm:px-9 sm:text-base',
  lg: 'min-h-12 px-6 text-sm sm:min-h-14 sm:px-8 sm:text-base lg:min-h-[74px] lg:px-11 lg:text-xl',
}

const variantClasses = {
  red: 'border-primary text-primary hover:bg-primary-soft focus-visible:outline-primary',
  light: 'border-white text-white hover:bg-white hover:text-primary-dark focus-visible:outline-white',
}

function SecondaryButton({
  children,
  href,
  size = 'md',
  variant = 'red',
  className,
  type = 'button',
}) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      className={cn(
        'inline-flex items-center justify-center rounded-lg border-2 bg-transparent font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'max-w-full text-center leading-tight',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default SecondaryButton

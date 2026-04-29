import { cn } from '../../lib/utils'

const sizeClasses = {
  sm: 'min-h-12 px-8 text-sm',
  md: 'min-h-[58px] px-9 text-base',
  lg: 'min-h-[74px] px-11 text-xl',
}

const variantClasses = {
  red: 'bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary',
  light: 'bg-white text-primary hover:bg-primary-soft focus-visible:outline-white',
}

function PrimaryButton({
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
        'inline-flex items-center justify-center rounded-lg font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default PrimaryButton

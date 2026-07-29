import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/utils/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-glow active:bg-brand-800',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-soft',
  outline:
    'border border-navy-200 text-navy-900 hover:border-brand-500 hover:text-brand-600 bg-white',
  ghost: 'text-navy-900 hover:bg-navy-50',
  'outline-light':
    'border border-white/30 text-white hover:bg-white hover:text-navy-900',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

interface CommonProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }
type ButtonAsLink = CommonProps & LinkProps & { as: 'link' }

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    className,
    children,
    as = 'button',
    ...rest
  } = props as ButtonProps & { as?: string }

  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (as === 'link') {
    return (
      <Link ref={ref as never} className={classes} {...(rest as LinkProps)}>
        {content}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a ref={ref as never} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref as never} className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
})

Button.displayName = 'Button'

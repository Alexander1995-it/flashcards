import { ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}
export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as, className, variant = 'body1', ...restProps } = props
  const classNames = clsx(s[variant], className)
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}

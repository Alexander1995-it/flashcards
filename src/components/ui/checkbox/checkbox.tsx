import { ElementRef, forwardRef } from 'react'

import { Check } from '@/assets'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled, label, onChange }: CheckboxProps, ref) => {
    const classNames = {
      container: clsx(s.container, className),
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
      wrapperCheckbox: clsx(s.wrapperCheckbox, disabled && s.disabled),
    }

    return (
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            <div className={classNames.wrapperCheckbox}>
              <CheckboxRadix.Root
                checked={checked}
                className={classNames.root}
                onCheckedChange={onChange}
                ref={ref}
              >
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  {checked && <Check />}
                </CheckboxRadix.Indicator>
              </CheckboxRadix.Root>
            </div>
            <div className={s.textLabel}>{label}</div>
          </Typography>
        </LabelRadix.Root>
      </div>
    )
  }
)

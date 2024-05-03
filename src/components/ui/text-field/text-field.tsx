import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Eye, EyeOff, Search } from '@/assets'
import { Typography } from '@/components'
import clsx from 'clsx'

import s from './text-field.module.scss'

type TextFieldProps = {
  errorMessage?: string
  label?: string
  search?: boolean
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, errorMessage, id, label, onChange, search, type, ...restProps }, ref) => {
    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, errorMessage && s.error, search && s.hasSearchIcon, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label),
      searchIcon: clsx(s.searchIcon),
    }

    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      setIsFocused(false)
    }

    const isButtonShowPassword = type === 'password'

    const finalType = showPassword && type === 'password' ? 'text' : type

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    return (
      <div>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {search && <Search className={classNames.searchIcon} isFocused={isFocused} />}
          <input
            className={classNames.field}
            onBlur={handleBlur}
            onChange={handlerChange}
            onFocus={handleFocus}
            ref={ref}
            type={finalType}
            {...restProps}
          />
          {isButtonShowPassword && (
            <button
              className={s.showPassword}
              onClick={() => {
                setShowPassword(prev => !prev)
              }}
            >
              {showPassword ? <Eye isFocused={isFocused} /> : <EyeOff isFocused={isFocused} />}
            </button>
          )}
        </div>
        <Typography className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

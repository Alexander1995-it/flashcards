import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { Eye, EyeOff, Search } from '@/assets'
import { Typography } from '@/components'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './text-field.module.scss'

type TextFieldProps = {
  errorMessage?: string
  search?: boolean
} & ComponentPropsWithoutRef<'input'>
export const TextField = ({ className, errorMessage, onChange, search, type }: TextFieldProps) => {
  const classNames = {
    error: clsx(s.error),
    field: clsx(s.field, errorMessage && s.error, search && s.hasSearchIcon, className),
    fieldContainer: clsx(s.fieldContainer),
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
      <div className={classNames.fieldContainer}>
        {search && <Search className={classNames.searchIcon} isFocused={isFocused} />}
        <input
          className={classNames.field}
          id={'textField'}
          onBlur={handleBlur}
          onChange={handlerChange}
          onFocus={handleFocus}
          type={finalType}
        />
        <LabelRadix.Root htmlFor={'textField'}>
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
        </LabelRadix.Root>
      </div>
      <Typography className={classNames.error} variant={'error'}>
        {errorMessage}
      </Typography>
    </div>
  )
}

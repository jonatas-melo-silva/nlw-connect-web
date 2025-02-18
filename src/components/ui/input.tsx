import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import React from 'react'

export type InputRootProps = ComponentProps<'div'> & { error?: boolean }

const inputRootStyles = cva(
  'group h-12 overflow-hidden bg-gray-800 border border-gray-600 rounded-xl px-4 flex items-center gap-2 text-gray-100 focus-within:border-blue transition-colors duration-300 ease-in-out data-[error=true]:border-danger'
)

export function InputRoot({
  className,
  error = false,
  ...props
}: InputRootProps) {
  return (
    <div
      data-error={error}
      className={cn(inputRootStyles({ className }))}
      {...props}
    />
  )
}

const inputFieldStyles = cva('flex-1 outline-0 placeholder-gray-400')

export type InputFieldProps = ComponentProps<'input'> &
  VariantProps<typeof inputFieldStyles>

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(inputFieldStyles({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

InputField.displayName = 'Input'

export { InputField, inputFieldStyles }

const inputIconStyles = cva(
  'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger'
)

export type InputIconProps = ComponentProps<'span'>

export function InputIcon({ className, ...props }: InputIconProps) {
  return <span className={cn(inputIconStyles({ className }))} {...props} />
}

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const styles = cva(
  'relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'
)

export type RankingCardRootProps = ComponentProps<'div'>

export function RankingCardRoot({ className, ...props }: RankingCardRootProps) {
  return <div className={cn(styles({ className }))} {...props} />
}

export type RankingCardPositionProps = ComponentProps<'span'>

const positionStyles = cva('text-sm text-gray-300 leading-none')

export function RankingCardPosition({
  className,
  ...props
}: RankingCardPositionProps) {
  return <span className={cn(positionStyles({ className }))} {...props} />
}

export type RankingCardNameProps = ComponentProps<'span'>

const nameStyles = cva(
  'text-heading text-2xl font-semibold text-gray-200 leading-none'
)

export function RankingCardName({ className, ...props }: RankingCardNameProps) {
  return <span className={cn(nameStyles({ className }))} {...props} />
}

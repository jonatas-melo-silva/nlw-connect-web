import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import type { ComponentProps } from 'react'

const styles = cva('grid gap-3 md:grid-cols-3')

export type StatisticsProps = ComponentProps<'section'>

export function Statistics({ className, ...props }: StatisticsProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          3
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </section>
  )
}

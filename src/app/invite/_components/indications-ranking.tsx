import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import type { ComponentProps } from 'react'

import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'

const styles = cva('w-full max-w-[440px] space-y-5')

export type IndicationsRankingProps = ComponentProps<'section'>

export function IndicationsRanking({
  className,
  ...props
}: IndicationsRankingProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <h2 className="text-200 text-xl">Ranking de indicações</h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1</span> | Jonatas Melo
          </span>

          <span className="text-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute right-8 top-0 "
            src={medalGold}
            alt="medal"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2</span> | Jonatas Melo
          </span>

          <span className="text-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute right-8 top-0 "
            src={medalSilver}
            alt="medal"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3</span> | Jonatas Melo
          </span>

          <span className="text-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute right-8 top-0 "
            src={medalCooper}
            alt="medal"
          />
        </div>
      </div>
    </section>
  )
}

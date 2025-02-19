import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import type { ComponentProps } from 'react'

import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import medalCooper from '@/assets/medal-cooper.svg'

import { getRanking } from '@/http/api'

const styles = cva('w-full max-w-[440px] space-y-5')

export type IndicationsRankingProps = ComponentProps<'section'>

export async function IndicationsRanking({
  className,
  ...props
}: IndicationsRankingProps) {
  const { ranking } = await getRanking()

  return (
    <section className={cn(styles({ className }))} {...props}>
      <h2 className="text-200 text-xl">Ranking de indicações</h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">1</span> | {item.name}
              </span>

              <span className="text-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
      
              {rankingPosition === 1 && (
                <Image
                  className="absolute right-8 top-0 "
                  src={medalGold}
                  alt="medal"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  className="absolute right-8 top-0 "
                  src={medalSilver}
                  alt="medal"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  className="absolute right-8 top-0 "
                  src={medalCooper}
                  alt="medal"
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

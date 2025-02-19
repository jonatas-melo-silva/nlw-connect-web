import { getSubscriberInviteClicks, getSubscriberRankingPosition } from '@/http/api'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import type { ComponentProps } from 'react'
import { getSubscriberInviteCount } from '../../../../http/api';

const styles = cva('grid gap-3 md:grid-cols-3')

export type StatisticsProps = ComponentProps<'section'> & {
  subscriberId: string
}

export async function Statistics({ className, subscriberId, ...props }: StatisticsProps) {
  const { count: assessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } = await getSubscriberRankingPosition(subscriberId)

  return (
    <section className={cn(styles({ className }))} {...props}>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          {assessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center gap-1 rounded-xl">
        <span className="font-heading text-3xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </section>
  )
}

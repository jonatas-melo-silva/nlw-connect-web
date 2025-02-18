import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Radio } from 'lucide-react'
import type { ComponentProps } from 'react'

const styles = cva(
  'flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6'
)

export type AboutProps = ComponentProps<'section'>

export function About({ className, ...props }: AboutProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-semibold text-gray-200 text-xl">
          Sobre
        </h2>
        <span className="flex items-center gap-2 uppercase text-purple font-semibold text-xl">
          <Radio className="size-5" />
          ao vivo
        </span>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar
        soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas
        tendências mais recentes em desenvolvimento de software, arquitetura de
        sistemas e tecnologias emergentes, com palestras, workshops e
        hackathons.
        <br />
        <br />
        Dias 15 a 18 de março | Das 14h às 18h | Online e gratuito
      </p>
    </section>
  )
}

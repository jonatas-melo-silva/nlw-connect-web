import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import type { ComponentProps } from 'react'

import logo from '@/assets/logo.svg'

const styles = cva('flex flex-col gap-8 items-center md:items-start')

export type HeroProps = ComponentProps<'section'>

export function Hero({ className, ...props }: HeroProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <Image src={logo} alt="devstage" width={108.5} height={30} />

      <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
        <span className="text-blue">CodeCraft</span>
        Summit 2025
      </h1>
    </section>
  )
}

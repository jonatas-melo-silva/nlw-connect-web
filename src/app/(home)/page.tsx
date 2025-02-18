import { About } from './_components/about'
import { Hero } from './_components/hero'
import { SubscriptionForm } from './_components/subscription-form'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <Hero />

      <div className="flex gap-5 items-stretch flex-col lg:flex-row">
        <About />

        <SubscriptionForm />
      </div>
    </div>
  )
}

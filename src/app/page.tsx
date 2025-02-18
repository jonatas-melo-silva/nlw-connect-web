import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-[1240px] px-5 py-8 md:py-0">
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        <section className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="devstage" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </section>

        <section className="flex gap-5 place-items-stretch flex-col md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre
              </h2>
              <span className="flex items-center gap-2 uppercase text-purple font-semibold text-xl">
                <Radio className="size-5" />
                ao vivo
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum,
              autem nemo aliquam nulla quos nobis animi laudantium magni odio
              quam, velit id ea quae quisquam perferendis quidem impedit odit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              repellendus veritatis vitae? Accusantium magni modi sit expedita
              eligendi possimus quas, eos repellendus quo suscipit nostrum vero
              a! Debitis, reiciendis quam.
              <br />
              <br />
              Maxime eum perspiciatis rem culpa velit necessitatibus magnam
              debitis quibusdam.
            </p>
          </div>

          <form
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
            action=""
          >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>
            </div>

            <Button type="submit">
              Confirmar
              <ArrowRight />
            </Button>
          </form>
        </section>
      </div>
    </main>
  )
}

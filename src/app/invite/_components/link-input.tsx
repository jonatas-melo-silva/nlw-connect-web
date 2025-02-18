'use client'

import { Button } from '@/components/ui/button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { Copy, Link } from 'lucide-react'

interface LinkInputProps {
  inviteLink: string
}

export function LinkInput({ inviteLink }: LinkInputProps) {
  function handleCopy() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue={inviteLink}
      />

      <Button
        type="button"
        className="-mr-2"
        variant="icon"
        size="icon"
        onClick={handleCopy}
      >
        <Copy />
      </Button>
    </InputRoot>
  )
}

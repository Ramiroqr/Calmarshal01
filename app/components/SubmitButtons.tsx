"use client"

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useFormStatus } from 'react-dom'

export function GoogleAuthButton() {
    const {pending} = useFormStatus()
  return (
    <>
        {pending ? (
            <Button disabled variant="outline" className='w-full'>
                <Loader2 className='size-4 mr-2 animate-spin'/> Please wait
            </Button>
        ): (
            <Button variant="outline" className='w-full'>
                <Image 
                    src="/google.svg"
                    alt='Google Logo'
                    width={16}
                    height={16}
                    className='size-4 mr-2'
                />
                Sing in with Google
            </Button>
        )}
    </>
  )
}

export function GitHubAuthButton() {
    const {pending} = useFormStatus()
  return (
    <>
        {pending ? (
            <Button disabled variant="outline" className='w-full'>
                <Loader2 className='size-4 mr-2 animate-spin'/> Please wait
            </Button>
        ): (
            <Button variant="outline" className='w-full'>
                <Image 
                    src="/github.svg"
                    alt='GitHub Logo' 
                    width={16}
                    height={16}
                    className='size-4 mr-2'
                />
                Sing in with GitHub
            </Button>
        )}
    </>
  )
}

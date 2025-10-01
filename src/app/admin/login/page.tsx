"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import Image from "next/image";
import { loginAction } from '@/app/_actions/login-action';
import { useState } from 'react';

export default function LoginPage() {

  const [error, setError] = useState<string | undefined>(undefined)

  const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || '/admin'

    const handleSubmit = async (formData: FormData) => {
      const result = await loginAction(formData)
      if (result.success) {
          router.push(redirectTo)
      } else {
          setError(result.error)
      }
  }

  return (
    <section className="mt-20 w-1/3 min-h-[60dvh] m-5 mb-12 flex flex-col gap-4 items-center justify-center overflow-hidden bg-pink-100 rounded-lg shadow">

      <div className="shadow-lg rounded-full">
                      <Image
                          src="/logo.webp"
                          alt="services"
                          width={300}
                          height={300}
                      />
                  </div>

      <form action={handleSubmit} className="flex flex-col gap-4 items-center w-2/3 relative">
        <input type="number" name="password" className="text-center shadow-[3px_3px_5px_0px_rgba(0,0,0,0.2)] w-1/2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="w-1/2 p-2 bg-pink-300 border border-[#444]/20 rounded tracking-wider font-semibold shadow-lg cursor-pointer">Ingresar</button>
        {error && <p className="text-red-500 absolute -bottom-10 left-1/2 transform -translate-x-1/2">{error}</p>}
      </form>
    </section>
  )
}
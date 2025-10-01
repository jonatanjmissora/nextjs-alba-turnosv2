"use server"

import { cookies } from 'next/headers'

export const loginAction = async (formData: FormData) => {
    const password = formData.get('password') as string
    
    if (password === process.env.NEXT_ADMIN_SECRET) {
        (await cookies()).set('admin', 'true', { 
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 60 // 30 días
        })
        return { success: true }
    }
    
    return { success: false, error: 'Contraseña incorrecta' }
}

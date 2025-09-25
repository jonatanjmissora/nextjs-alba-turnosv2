'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { createServicesStore, type ServicesStore } from '@/store/useServicesStore'

export type ServicesStoreApi = ReturnType<typeof createServicesStore>

export const ServicesStoreContext = createContext<ServicesStoreApi | undefined>(undefined)

export interface ServicesStoreProviderProps {
  children: ReactNode
  // Aquí podrías pasar un estado inicial si lo necesitas
  // initialStore?: Partial<ServicesStore>
}

export const ServicesStoreProvider = ({ children }: ServicesStoreProviderProps) => {
  const storeRef = useRef<ServicesStoreApi | null>(null)
  
  if (storeRef.current === null) {
    storeRef.current = createServicesStore()
  }

  return (
    <ServicesStoreContext.Provider value={storeRef.current}>
      {children}
    </ServicesStoreContext.Provider>
  )
}

export const useServicesStore = <T,>(
  selector: (store: ServicesStore) => T,
): T => {
  const servicesStoreContext = useContext(ServicesStoreContext)

  if (!servicesStoreContext) {
    throw new Error('useServicesStore must be used within ServicesStoreProvider')
  }

  return useStore(servicesStoreContext, selector)
}

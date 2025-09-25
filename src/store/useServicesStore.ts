import { create } from 'zustand'

export type ServicesState = {
  selectedService: string
}

export type ServicesActions = {
  setSelectedService: (service: string) => void
}

export type ServicesStore = ServicesState & ServicesActions

const defaultInitState: ServicesState = {
  selectedService: '0',
}

export const createServicesStore = (initState: Partial<ServicesState> = {}) => {
  return create<ServicesStore>((set) => ({
    ...defaultInitState,
    ...initState,
    setSelectedService: (service) => set({ selectedService: service }),
  }))
}

// Exportamos una instancia por defecto para compatibilidad
export const useServicesStoreDirect = create<ServicesStore>()((set) => ({
  ...defaultInitState,
  setSelectedService: (service) => set({ selectedService: service }),
}))

import { create } from "zustand";

export type State = {
  selectedService: string;
  step: number;
};

export type Actions = {
  setSelectedService: (service: string) => void;
  setStep: (step: number) => void;
};

export type StoreType = State & Actions;

const defaultInitState: State = {
  selectedService: "0",
  step: 0,
};

export const createStore = (initState: Partial<State> = {}) => {
  return create<StoreType>((set) => ({
    ...defaultInitState,
    ...initState,
    setSelectedService: (service) => set({ selectedService: service }),
    setStep: (step) => set({ step }),
  }));
};

// Exportamos una instancia por defecto para compatibilidad
export const useStoreDirect = create<StoreType>()((set) => ({
  ...defaultInitState,
  setSelectedService: (service) => set({ selectedService: service }),
  setStep: (step) => set({ step }),
}));

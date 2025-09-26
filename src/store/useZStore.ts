import { create } from "zustand";

export type State = {
  selectedService: string;
  step: number;
  selectedDate: Date;
  selectedTime: string | undefined;
};

export type Actions = {
  setSelectedService: (service: string) => void;
  setStep: (step: number) => void;
  setSelectedDate: (date: Date) => void;
  setSelectedTime: (time: string | undefined) => void;
};

export type StoreType = State & Actions;

const defaultInitState: State = {
  selectedService: "0",
  step: 1,
  selectedDate: new Date(),
  selectedTime: undefined,
};

export const createStore = (initState: Partial<State> = {}) => {
  return create<StoreType>((set) => ({
    ...defaultInitState,
    ...initState,
    setSelectedService: (service) => set({ selectedService: service }),
    setStep: (step) => set({ step }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    setSelectedTime: (time) => set({ selectedTime: time }),
  }));
};

// Exportamos una instancia por defecto para compatibilidad
export const useStoreDirect = create<StoreType>()((set) => ({
  ...defaultInitState,
  setSelectedService: (service) => set({ selectedService: service }),
  setStep: (step) => set({ step }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
}));

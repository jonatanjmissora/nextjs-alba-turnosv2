import { create } from "zustand";

export type State = {
    selectedService: number | undefined;
    selectedDate: Date | undefined;
    selectedTime: string | undefined;
    name: string | undefined;
    phone: string | undefined;
    checkout: boolean;
};

export type Actions = {
    setSelectedService: (service: number | undefined) => void;
    setSelectedDate: (date: Date | undefined) => void;
    setSelectedTime: (time: string | undefined) => void;
    setName: (name: string | undefined) => void;
    setPhone: (phone: string | undefined) => void;
    setCheckout: (checkout: boolean) => void;
};

export type StoreType = State & Actions;

const defaultInitState: State = {
    selectedService: undefined,
    selectedDate: undefined,
    selectedTime: undefined,
    name: undefined,
    phone: undefined,
    checkout: false,
};

export const createStore = (initState: Partial<State> = {}) => {
    return create<StoreType>((set) => ({
        ...defaultInitState,
        ...initState,
        setSelectedService: (service) => set({ selectedService: service }),
        setSelectedDate: (date) => set({ selectedDate: date }),
        setSelectedTime: (time) => set({ selectedTime: time }),
        setName: (name) => set({ name }),
        setPhone: (phone) => set({ phone }),
        setCheckout: (checkout) => set({ checkout }),
    }));
};

// Exportamos una instancia por defecto para compatibilidad
export const useStoreDirect = create<StoreType>()((set) => ({
    ...defaultInitState,
    setSelectedService: (service) => set({ selectedService: service }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    setSelectedTime: (time) => set({ selectedTime: time }),
    setName: (name) => set({ name }),
    setPhone: (phone) => set({ phone }),
    setCheckout: (checkout) => set({ checkout }),
}));

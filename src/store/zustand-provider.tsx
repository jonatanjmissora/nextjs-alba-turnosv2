"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { createStore, type StoreType } from "@/store/useZStore";

type Store = ReturnType<typeof createStore>;

const StoreContext = createContext<Store | undefined>(undefined);

interface StoreProviderProps {
    children: ReactNode;
    initialState?: {
        selectedService?: number;
        selectedDate?: Date;
        selectedTime?: string;
        name?: string;
        phone?: string;
    };
}

export const ZustandProvider = ({
    children,
    initialState = {},
}: StoreProviderProps) => {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null);

    if (!storeRef.current) {
        storeRef.current = createStore(initialState);
    }

    return (
        <StoreContext.Provider value={storeRef.current}>
            {children}
        </StoreContext.Provider>
    );
};

export function useZStore<T>(selector: (state: StoreType) => T): T {
    const store = useContext(StoreContext);

    if (!store) {
        throw new Error("useZStore must be used within ZustandProvider");
    }

    return useStore(store, selector);
}

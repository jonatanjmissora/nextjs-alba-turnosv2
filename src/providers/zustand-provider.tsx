"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { createStore, type StoreType } from "@/store/useZStore";

export type StoreApi = ReturnType<typeof createStore>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
  // Aquí podrías pasar un estado inicial si lo necesitas
  // initialStore?: Partial<ServicesStore>
}

export const ZustandProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useZStore = <T,>(selector: (store: StoreType) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(
      "useServicesStore must be used within ServicesStoreProvider",
    );
  }

  return useStore(storeContext, selector);
};

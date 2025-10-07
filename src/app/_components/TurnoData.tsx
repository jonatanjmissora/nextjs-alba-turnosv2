"use client";

import { getCurrentDateInArgentina } from "@/lib/utils";
import { useZStore } from "@/store/zustand-provider";

export const TurnoData = () => {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const name = useZStore((state) => state.name);
    const phone = useZStore((state) => state.phone);
    return (
        <div className="w-full p-2 flex flex-col gap-2">
            <span>selectedService: {selectedService}</span>
            <span>selectedDate: {selectedDate?.toDateString()}</span>
            <span>
                selectedARGDate: {getCurrentDateInArgentina(selectedDate)}
            </span>
            <span>selectedTime: {selectedTime}</span>
            <span>name: {name}</span>
            <span>phone: {phone}</span>
        </div>
    );
};

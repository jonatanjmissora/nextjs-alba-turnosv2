"use client";

import { useZStore } from "@/store/zustand-provider";
import { addTurnoAction } from "../_actions/turno-actions";

export default function ConfirmBtn() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const name = useZStore((state) => state.name);
    const phone = useZStore((state) => state.phone);

    const handleConfirm = async () => {
        if (selectedService && selectedDate && selectedTime && name && phone) {

            await addTurnoAction(
                selectedService,
                selectedDate.toLocaleDateString(),
                selectedTime,
                name,
                phone,
            );
        } else {
            return;
        }
    };

    return (
        <button
            type="submit"
            className={`animate-bounce w-[14ch] text-center py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.35)] bg-[#ff8000]/70`}
            onClick={handleConfirm}
        >
            CONFIRMAR
        </button>
    );
}

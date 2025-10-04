"use client";

import { useZStore } from "@/store/zustand-provider";
import { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useRouter, usePathname } from "next/navigation";
import { addTurnoAction } from "../_actions/turno-actions";

export default function ConfirmForm() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const name = useZStore((state) => state.name);
    const phone = useZStore((state) => state.phone);

    const router = useRouter();
    const pathname = usePathname();
    const [error, setError] = useState<string | null>(null);

    const handleConfirm = async () => {
        if (selectedService && selectedDate && selectedTime && name && phone) {
            const { error } = await addTurnoAction(
                selectedService,
                selectedDate.toISOString().split("T")[0],
                selectedTime,
                name,
                phone,
            );
            if (error) {
                console.error(error);
                setError("Intente de nuevo");
                return;
            }
            router.replace(
                pathname === "/mobil/data" ? "/mobil/checkout" : "/checkout",
            );
        } else {
            return;
        }
    };

    return (
        <div className="relative">
            <form action={handleConfirm}>
                <SubmitBtn error={error} />
                {error && (
                    <p className="absolute top-[90%] left-0 w-full h-full text-red-500 text-xs">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}

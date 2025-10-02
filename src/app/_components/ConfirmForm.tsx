"use client";

import { useZStore } from "@/store/zustand-provider";
import { getAllServicesAction } from "../_actions/turno-actions";
import { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useRouter, usePathname } from "next/navigation";

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
            const { data, error } = await getAllServicesAction();
            if (error) {
                console.error(error);
                setError("Intente de nuevo");
                return;
            }
            console.log(data);
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

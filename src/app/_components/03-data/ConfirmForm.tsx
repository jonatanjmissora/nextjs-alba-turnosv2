"use client";

import { useZStore } from "@/store/zustand-provider";
import { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useRouter, usePathname } from "next/navigation";
import { addTurnoAction } from "../../_actions/turno-actions";
import { useTurnos } from "@/lib/turnos-query";
import { schemaTurno } from "@/lib/schema-turno";
import z from "zod";

export default function ConfirmForm() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const name = useZStore((state) => state.name);
    const phone = useZStore((state) => state.phone);

    const router = useRouter();
    const pathname = usePathname();
    const [error, setError] = useState<string | null>(null);
    const { turnos } = useTurnos();

    const handleConfirm = async () => {
        if (selectedService && selectedDate && selectedTime && name && phone) {
            // formo id con date y time
            const date = selectedDate.toISOString().split("T")[0];
            const time = selectedTime;
            const id = Number(
                date.substring(0, 10).replaceAll("-", "") +
                    time.substring(0, 5).replace(":", ""),
            );
            //verifico si el turno ya esta ocupado
            const isTurnoOcupado = turnos.findIndex((turno) => turno.id === id);
            if (isTurnoOcupado !== -1) {
                setError("Turno ocupado");
                return;
            }

            const newTurno = {
                id,
                servicio: selectedService,
                fecha: date,
                hora: time,
                nombre: name,
                telefono: phone,
            };

            //valido schema
            const { error: schemaError, success } =
                schemaTurno.safeParse(newTurno);
            if (!success) {
                console.log(
                    "ERRORES de validacion :",
                    z.flattenError(schemaError).fieldErrors,
                );
                setError("⚠️validacion");
                return;
            }

            //agrego el turno en base de datos
            const { error } = await addTurnoAction(newTurno);
            if (error) {
                console.error(error);
                setError("Intente de nuevo");
                return;
            }

            //redirijo al /checkout si esta todo ok
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

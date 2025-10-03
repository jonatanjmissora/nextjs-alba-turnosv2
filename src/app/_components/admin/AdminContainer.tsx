"use client";

import { useState } from "react";
import AdminMiniCalendar from "./AdminMiniCalendar";
import TurnosContainer from "./TurnosContainer";
import type { TurnoType } from "@/lib/turnos-mock";

export default function AdminPage({
    turnos,
    error,
}: {
    turnos: TurnoType[];
    error: string;
}) {
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="w-1/3 min-h-[95dvh] m-5 mb-12 flex flex-col gap-4 items-center overflow-hidden">
            <AdminMiniCalendar
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            <TurnosContainer
                selectedAdminDate={selectedAdminDate}
                turnos={turnos}
            />
        </section>
    );
}

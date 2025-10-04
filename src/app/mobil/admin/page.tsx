"use client";

import { useState } from "react";
import { useTurnos } from "@/lib/turnos-query";
import { MobilAdminContent } from "@/app/_components/04-admin/MobilAdminContent";
import { MobilAdminTime } from "@/app/_components/04-admin/MobilAdminTime";

export default function AdminPage() {
    const { turnos, isError, error, isLoading } = useTurnos();
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    return (
        <section className="w-[95dvw] min-h-[95dvh] m-5 mb-12 flex flex-col gap-4 items-center overflow-hidden">
            <MobilAdminContent
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error: {error?.message}</p>
            ) : (
                <MobilAdminTime
                    selectedAdminDate={selectedAdminDate}
                    turnos={turnos}
                />
            )}
        </section>
    );
}

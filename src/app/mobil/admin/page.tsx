"use client";

import { useState } from "react";
import { useTurnos } from "@/lib/turnos-query";
import { MobilAdminTime } from "@/app/_components/04-admin/MobilAdminTime";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { MobilAdminMiniCalendar } from "@/app/_components/04-admin/MobilAdminMiniCalendar";

export default function AdminPage() {
    const { turnos, isError, error, isLoading } = useTurnos();
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    return (
        <section className="w-[95dvw] min-h-[95dvh] m-5 mb-12 flex flex-col gap-4 items-center overflow-hidden">
            <MobilAdminMiniCalendar
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            {isLoading ? (
                <ServiceLoading />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                <MobilAdminTime
                    selectedAdminDate={selectedAdminDate}
                    turnos={turnos}
                />
            )}
        </section>
    );
}

const ServiceLoading = () => {
    return (
        <div className="w-full h-[60dvh] border border-[#444]/20 shadow bg-pink-100 p-2 rounded-lg flex items-center justify-center">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="w-full h-[60dvh] border border-[#444]/20 shadow bg-pink-100 p-2 rounded-lg flex items-center justify-center">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

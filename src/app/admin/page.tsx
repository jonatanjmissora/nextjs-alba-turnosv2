"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useTurnos } from "@/lib/turnos-query";
import { useState } from "react";
import AdminTime from "../_components/04-admin/AdminTime";
import AdminMiniCalendar from "../_components/04-admin/AdminMiniCalendar";

export default function AdminPage() {
    const { turnos, isError, error, isLoading } = useTurnos();
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    return (
        <section className="w-1/3 min-h-[95dvh] m-5 mb-12 flex flex-col gap-4 items-center overflow-hidden">
            <AdminMiniCalendar
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            {isLoading ? (
                <ServiceLoading />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                <AdminTime
                    selectedAdminDate={selectedAdminDate}
                    turnos={turnos}
                />
            )}
        </section>
    );
}

const ServiceLoading = () => {
    return (
        <div className="w-full h-[60dvh] flex items-center justify-center border border-[#444]/20 shadow bg-pink-100 p-2 rounded-lg">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="w-full h-[60dvh] flex items-center justify-center border border-[#444]/20 shadow bg-pink-100 p-2 rounded-lg">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

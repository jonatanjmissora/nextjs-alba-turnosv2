"use client";

import MobilLayout from "@/app/_components/layouts/mobil-layout";
import { useTurnos } from "@/lib/turnos-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { MobilCalendarContent } from "../../_components/02-calendar/MobilCalendarContent";

export default function MobilCalendarPage() {
    const { turnos, error, isError, isLoading, isFetching } = useTurnos();

    return (
        <MobilLayout title="Selecciona fecha y hora">
            {isLoading ? (
                <ServicesFetching />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                turnos && (
                    <MobilCalendarContent
                        turnos={turnos}
                        isFetching={isFetching}
                    />
                )
            )}
        </MobilLayout>
    );
}

const ServicesFetching = () => {
    return (
        <div className="w-[95%] h-[45dvh] p-3 mx-auto flex flex-col items-center justify-center">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="w-[95%] h-[45dvh] p-3 mx-auto flex flex-col items-center justify-center">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

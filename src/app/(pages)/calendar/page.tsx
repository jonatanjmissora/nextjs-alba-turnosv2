"use client";

import ContentLayout from "@/app/_components/layouts/ContentLayout";
import { useTurnos } from "@/lib/turnos-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { CalendarContent } from "@/app/_components/02-calendar/CalendarContent";

export default function CalendarPage() {
    const { turnos, error, isError, isLoading, isFetching } = useTurnos();

    return (
        <ContentLayout title="Selecciona fecha y hora">
            {isLoading ? (
                <ServicesFetching />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                turnos && (
                    <CalendarContent turnos={turnos} isFetching={isFetching} />
                )
            )}
        </ContentLayout>
    );
}

const ServicesFetching = () => {
    return (
        <div className="flex-1 flex flex-col sm:gap-6 2xl:gap-8 items-center justify-center mt-8 w-[80%] min-h-[45vh]">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="flex-1 flex flex-col sm:gap-6 2xl:gap-8 items-center justify-center mt-8 w-[80%] min-h-[45vh]">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

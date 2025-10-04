"use client";

import MobilAccordion from "@/app/_components/01-services/mobil-accordion";
import MobilLayout from "@/app/_components/layouts/mobil-layout";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useServices } from "@/lib/services-query";

export default function MobilServices() {
    const { services, error, isError, isFetching } = useServices();

    return (
        <MobilLayout title="Selecciona un servicio">
            {isFetching ? (
                <ServicesFetching />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                services && <MobilAccordion services={services} />
            )}
        </MobilLayout>
    );
}

const ServicesFetching = () => {
    return (
        <div className="w-[95%] h-[50dvh] p-3 mx-auto flex flex-col items-center justify-center">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="w-[95%] h-[50dvh] p-3 mx-auto flex flex-col items-center justify-center">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

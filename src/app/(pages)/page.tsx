"use client";

import { useServices } from "@/lib/services-query";
import ServicesAccordion from "../_components/01-services/accordion";
import ContentLayout from "../_components/layouts/ContentLayout";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function Services() {
    const { services, error, isError, isFetching } = useServices();

    return (
        <ContentLayout title="Selecciona un servicio">
            {isFetching ? (
                <ServicesFetching />
            ) : isError ? (
                <ServicesError error={error} />
            ) : (
                services && <ServicesAccordion services={services} />
            )}
        </ContentLayout>
    );
}

const ServicesFetching = () => {
    return (
        <div className="w-[80%] flex-1 mx-auto flex flex-col items-center justify-center">
            <Spinner variant={"bars"} size={50} />
        </div>
    );
};

const ServicesError = ({ error }: { error: null | Error }) => {
    return (
        <div className="w-[80%] mx-auto sm:h-[375px] 2xl:h-[445px] flex flex-col items-center justify-center">
            Error: {error?.message || "Error al cargar los servicios"}
        </div>
    );
};

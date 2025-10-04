import type { ServiceType } from "@/lib/types";
import { getAllServicesAction } from "../_actions/service-actions";
import ServicesAccordion from "../_components/01-services/accordion";
import ContentLayout from "../_components/ContentLayout";

export default async function Services() {
    const { data: services, error } = (await getAllServicesAction()) as {
        data: ServiceType[];
        error: string;
    };

    return (
        <ContentLayout title="Selecciona un servicio">
            <ServicesAccordion services={services} error={error} />
        </ContentLayout>
    );
}

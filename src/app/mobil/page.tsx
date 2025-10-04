import MobilAccordion from "@/app/_components/mobil/mobil-accordion";
import MobilLayout from "@/app/_components/mobil/mobil-layout";
import { ServiceType } from "@/lib/types";
import { getAllServicesAction } from "../_actions/service-actions";

export default async function MobilServices() {
    const { data: services, error } = (await getAllServicesAction()) as {
        data: ServiceType[];
        error: string;
    };

    return (
        <MobilLayout>
            <MobilAccordion services={services} error={error} />
        </MobilLayout>
    );
}

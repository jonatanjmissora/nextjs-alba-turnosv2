"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { CategoryType, ServiceType } from "@/lib/types";
import { IconCheck } from "@tabler/icons-react";
import { useZStore } from "@/store/zustand-provider";
import { formatPrice, getServicesTree } from "@/lib/utils";

export default function MobilAccordion({
    services,
}: {
    services: ServiceType[];
}) {
    const selectedService = useZStore((state) => state.selectedService);
    const setSelectedService = useZStore((state) => state.setSelectedService);
    const servicesTree = getServicesTree(services);

    return (
        <div className="w-[95%] min-h-[50dvh] p-3 mx-auto flex flex-col items-center">
            <Accordion
                type="single"
                collapsible
                className="w-full border-b border-[#444]/20"
                defaultValue="item-1"
            >
                {servicesTree.map((service) => (
                    <AccordionItem
                        key={service.id}
                        value={service.id.toString()}
                    >
                        <AccordionTrigger>
                            <div className="relative">
                                <span className="font-semibold tracking-wide hover:tracking-widest duration-300 text-[#444]">
                                    {service.title}
                                </span>
                                <IconCheck
                                    stroke={3}
                                    size={40}
                                    color="#ff8000"
                                    className={`absolute -top-2 left-[110%] ${selectedService && selectedService === service.id ? "block" : "hidden"}`}
                                />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance p-3 pb-6">
                            {service.categories.map((category) => (
                                <MovilServiceCard
                                    key={category.id}
                                    category={category}
                                    selectedService={selectedService}
                                    setSelectedService={setSelectedService}
                                />
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

const MovilServiceCard = ({
    category,
    selectedService,
    setSelectedService,
}: {
    category: CategoryType;
    selectedService: number | undefined;
    setSelectedService: (id: number | undefined) => void;
}) => {
    const handleSelectService = (id: number) => {
        if (selectedService && selectedService === id) {
            setSelectedService(undefined);
        } else {
            setSelectedService(id);
        }
    };

    return (
        <button
            type="button"
            onClick={() => handleSelectService(category.id)}
            key={category.id}
            className={`flex flex-col gap-1 border border-[#444]/20 p-2 rounded shadow cursor-pointer ${selectedService && selectedService === category.id ? "bg-orange-500/20" : "bg-pink-50"}`}
        >
            <div className="flex justify-between items-center">
                <div className="w-full flex items-center gap-2">
                    <span className="text-left">{category.subtitle}</span>
                    <IconCheck
                        stroke={2}
                        size={20}
                        color="#ff8000"
                        className={`${selectedService && selectedService === category.id ? "block" : "hidden"}`}
                    />
                </div>
                <span className="text-base text-[#444] font-semibold text-balance w-[12ch] text-right">
                    $ {formatPrice(category.price)}
                </span>
            </div>
            <p className="text-xs text-[#444]/70 text-balance p-1">
                {category.description}
            </p>
            <span className="w-full text-right text-xs text-[#444]/80">
                ...leer más
            </span>
        </button>
    );
};

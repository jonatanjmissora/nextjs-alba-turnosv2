"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";

import {
    type CategoryType,
    services,
    type ServiceType,
} from "@/lib/services-mock";

export default function ServicesAccordion() {
    return (
        <div className="w-full">
            <div className="w-full flex-1 h-[445px] flex justify-center items-center services-card-container">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full py-5 h-full"
                >
                    {services.map((service) => (
                        <AccordionItemElement
                            key={service.id}
                            service={service}
                        />
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

const AccordionItemElement = ({ service }: { service: ServiceType }) => {
    const selectedService = useZStore((state) => state.selectedService);
    return (
        <AccordionItem
            value={service.id}
            className="w-full flex flex-col justify-center items-center border-b border-[#444]/20"
        >
            <AccordionTrigger className="font-semibold tracking-wider py-4 text-[#444]  w-full relative">
                <span>{service.title}</span>
                <IconCheck
                    stroke={3}
                    size={40}
                    color="#ff8000"
                    className={`absolute top-1/2 transform -translate-y-1/2 right-2 ${selectedService && selectedService[0] === service.id ? "block" : "hidden"}`}
                />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance p-3">
                {service.categories.map((category) => (
                    <ServiceCard key={category.id} category={category} />
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

import { useZStore } from "@/providers/zustand-provider";
import { IconCheck } from "@tabler/icons-react";

const ServiceCard = ({ category }: { category: CategoryType }) => {
    const selectedService = useZStore((state) => state.selectedService);
    const setSelectedService = useZStore((state) => state.setSelectedService);

    const handleSelectService = () => {
        if (selectedService && selectedService === category.id) {
            setSelectedService(undefined);
        } else {
            setSelectedService(category.id);
        }
    };

    return (
        <button
            type="button"
            className={`flex flex-col justify-between items-center bg-pink-100 p-4 border border-[#444]/20 rounded-lg  shadow-xl ${selectedService && selectedService === category.id && "bg-pink-300/20"}`}
            onClick={handleSelectService}
        >
            <div className="text-[#333] w-full flex justify-between items-center pb-2">
                <span className="font-semibold">{category.subtitle}</span>
                <span className="font-semibold text-lg text-[#444] min-w-[10ch]">
                    $ {category.price}
                </span>
            </div>
            <p className="text-pretty text-xs text-[#444]/70">
                {category.description}
            </p>
            <span className="w-full text-right text-xs text-[#444]/80">
                ...leer más
            </span>
        </button>
    );
};

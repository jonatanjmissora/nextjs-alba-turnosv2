"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { services, type ServiceType } from "@/lib/services-mock";

export default function ServicesAccordion() {
  return (
    <div className="w-full p-6 flex justify-center items-center h-[470px] services-card-container">
      <div className="w-full max-w-lg">
        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItemElement key={service.id} service={service} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const AccordionItemElement = ({ service }: { service: ServiceType }) => {
  const selectedService = useServicesStore((state) => state.selectedService);
  return (
    <AccordionItem
      value={service.id}
      className="w-full flex flex-col justify-center items-center"
    >
      <AccordionTrigger className="font-semibold tracking-wider py-4 text-[#444] border-b border-[#444]/20 w-3/4 mx-auto relative">
        <span>{service.title}</span>
        <IconCheck
          stroke={2}
          className={`absolute top-1/2 transform -translate-y-1/2 right-2 ${selectedService === service.id ? "block" : "hidden"}`}
        />
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <ServiceCard service={service} />
      </AccordionContent>
    </AccordionItem>
  );
};

import { useServicesStore } from "@/providers/services-store-provider";
import { IconCheck } from "@tabler/icons-react";

const ServiceCard = ({ service }: { service: ServiceType }) => {
  const selectedService = useServicesStore((state) => state.selectedService);
  const setSelectedService = useServicesStore(
    (state) => state.setSelectedService,
  );
  const handleSelectService = () => {
    if (selectedService === service.id) {
      setSelectedService("0");
    } else {
      setSelectedService(service.id);
    }
  };

  return (
    <button
      type="button"
      className={`flex flex-col justify-between items-center bg-pink-100 p-4 border border-[#444]/20 rounded-lg m-2 shadow-xl ${selectedService === service.id && "bg-pink-300/20"}`}
      onClick={handleSelectService}
    >
      <div className="text-[#333] w-full flex justify-between items-center pb-2">
        <span className="font-semibold">{service.subtitle}</span>
        <span className="font-semibold text-lg text-[#444]">
          $ {service.price}
        </span>
      </div>
      <p className="text-pretty text-xs text-[#444]/70">
        {service.description}
      </p>
      <span className="w-full text-right text-xs text-[#444]/80">
        ...leer más
      </span>
    </button>
  );
};

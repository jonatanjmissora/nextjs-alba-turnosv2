import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const services = [
  {
    id: "1",
    title: "Maderoterapia",
    subtitle: "Cuerpo entero",
    price: "100.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ",
  },
  {
    id: "2",
    title: "Limpieza Facial",
    subtitle: "Simple",
    price: "100.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "3",
    title: "Limpieza Corporal",
    subtitle: "Simple",
    price: "100.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "4",
    title: "Depilación Láser",
    subtitle: "Cuerpo entero",
    price: "100.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: "5",
    title: "Hifu",
    subtitle: "Simple",
    price: "100.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

export default function ServicesAccordion({
  selectedService,
  setSelectedService,
}: {
  selectedService: string;
  setSelectedService: (service: string) => void;
}) {
  return (
    <div className="w-full p-6 flex justify-center items-center h-[470px] services-card-container">
      <div className="w-full max-w-lg">
        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItemElement
              key={service.id}
              service={service}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const AccordionItemElement = ({
  service,
  selectedService,
  setSelectedService,
}: {
  service: any;
  selectedService: string;
  setSelectedService: (service: string) => void;
}) => {
  return (
    <AccordionItem
      value={service.id}
      className="w-full flex flex-col justify-center items-center"
    >
      <AccordionTrigger className="font-semibold tracking-wider py-4 text-[#444] border-b border-[#444]/20 w-3/4 mx-auto">
        {service.title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <ServiceCard
          service={service}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

const ServiceCard = ({
  service,
  selectedService,
  setSelectedService,
}: {
  service: any;
  selectedService: string;
  setSelectedService: (service: string) => void;
}) => {
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

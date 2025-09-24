"use client";

import Image from "next/image";
import ServicesAccordion from "./accordion";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("0");

  return (
    <main className="w-screen flex-1 flex flex-col items-center justify-center">
      <div className="w-1/2  h-[600px] flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-pink-200">
        <div className="w-full h-full flex">
          <AsideServices />
          <ContentServices
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>
        <div className="w-full h-16 flex justify-center items-center gap-4 bg-[#ff9bac]">
          <FooterServices />
        </div>
      </div>
    </main>
  );
}

function AsideServices() {
  return (
    <aside className="w-1/3 h-full relative overflow-hidden shadow-xl">
      <div className="absolute top-0 left-0">
        <Image src="/logo.jpg" alt="services" width={260} height={240} />
      </div>
      <div className="absolute -bottom-24 -left-1">
        <Image src="/alba-alpha.png" alt="services" width={240} height={240} />
      </div>
      <div></div>
    </aside>
  );
}

function ContentServices({
  selectedService,
  setSelectedService,
}: {
  selectedService: string;
  setSelectedService: (service: string) => void;
}) {
  return (
    <section className="w-2/3 h-[500px] mx-2">
      <h2 className="text-xl text-[#444] p-8 py-4 border-b border-[#444]/20">
        Selecciona un servicio
      </h2>
      <ServicesAccordion
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </section>
  );
}

function FooterServices() {
  return (
    <>
      <aside className="w-1/3 h-full flex justify-around items-center">
        <Image src="/whatsapp_icon.svg" alt="whatsapp" width={30} height={30} />
        <Image
          src="/instagram_icon.svg"
          alt="instagram"
          width={33}
          height={33}
        />
        <Image
          src="/google_map_icon.svg"
          alt="google_map"
          width={30}
          height={30}
        />
      </aside>
      <article className="w-2/3 h-full flex justify-center items-center">
        <TimeLine />
      </article>
    </>
  );
}

const TimeLine = () => {
  return (
    <article className="w-full flex justify-around items-center">
      <button
        className="bg-[#ffb6c0] p-2  rounded text-xs text-[#444]/50 tracking-wider font-medium"
        type="button"
      >
        ATRAS
      </button>

      <ul className="flex gap-4">
        <li className="bg-[#ffdbdf] p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow">
          1
        </li>
        <li className="bg-[#ffb6c0] p-2 rounded-full text-xs text-[#444] tracking-wider font-medium">
          2
        </li>
        <li className="bg-[#ffb6c0] p-2 rounded-full text-xs text-[#444] tracking-wider font-medium">
          3
        </li>
      </ul>

      <Link
        href="/calendar"
        className="bg-[#ffdbdf] p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow"
        type="button"
      >
        SIGUIENTE
      </Link>
    </article>
  );
};

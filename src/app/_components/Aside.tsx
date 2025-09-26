"use client";

import Image from "next/image";
// import { useZStore } from "@/providers/zustand-provider";

export default function Aside() {
  // const selectedService = useZStore((state) => state.selectedService);
  // const step = useZStore((state) => state.step);
  // const selectedDate = useZStore((state) => state.selectedDate);
  // const selectedTime = useZStore((state) => state.selectedTime);
  return (
    <aside className="w-1/3 h-full relative overflow-hidden shadow-xl">
      <div className="absolute top-0 left-0">
        <Image src="/logo.jpg" alt="services" width={260} height={240} />
      </div>
      {/* <p>step: {step}</p>
      <p>service: {selectedService}</p>
      <p>date: {selectedDate.toDateString()}</p>
      <p>time: {selectedTime}</p> */}
      <div className="absolute -bottom-24 -left-1">
        <Image src="/alba-alpha.png" alt="services" width={240} height={240} />
      </div>
      <div></div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useZStore } from "@/providers/zustand-provider";

export default function Footer() {
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
  const selectedService = useZStore((state) => state.selectedService);
  const step = useZStore((state) => state.step);
  const setStep = useZStore((state) => state.setStep);
  const active = "bg-[#ffb6c0]";
  const inactive = "transparent";

  return (
    <article className="w-full flex justify-around items-center">
      <button
        className={`p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${step !== 1 ? active : inactive}`}
        type="button"
        onClick={() => {
          if (step !== 1) {
            setStep(step - 1);
          }
        }}
        disabled={step === 1}
      >
        {step === 1 ? <span>ATRAS</span> : <Link href="/">ATRAS</Link>}
      </button>

      <ul className="flex gap-4">
        <li
          className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${step === 1 ? active : inactive}`}
        >
          1
        </li>
        <li
          className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${step === 2 ? active : inactive}`}
        >
          2
        </li>
        <li
          className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${step === 3 ? active : inactive}`}
        >
          3
        </li>
      </ul>

      <button
        className={`p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${selectedService !== "0" ? active : inactive}`}
        type="button"
        onClick={() => {
          if (step !== 3) {
            setStep(step + 1);
          }
        }}
        disabled={selectedService === "0"}
      >
        {selectedService === "0" ? (
          <span>SIGUIENTE</span>
        ) : (
          <Link href="/calendar">SIGUIENTE</Link>
        )}
      </button>
    </article>
  );
};

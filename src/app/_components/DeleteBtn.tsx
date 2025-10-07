"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useFormStatus } from "react-dom";

export default function DeleteBtn() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className={`tracking-wider h-10 sm:h-full rounded-lg w-full sm:w-[14ch] flex items-center justify-center py-1 px-3 font-semibold text-white/80 bg-black/80 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.35)]`}
        >
            {pending ? <Spinner variant={"bars"} size={10} /> : "Confirmar"}
        </button>
    );
}

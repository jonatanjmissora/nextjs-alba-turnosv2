"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useFormStatus } from "react-dom";

export default function SubmitBtn({ error }: { error: string | null }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className={`flex justify-center items-center ${!error && "animate-bounce"} w-[14ch] text-center py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.35)] ${error ? "bg-red-600/60" : "bg-[#ff8000]/70"}`}
        >
            {pending ? <Spinner variant={"bars"} size={10} /> : "CONFIRMAR"}
        </button>
    );
}

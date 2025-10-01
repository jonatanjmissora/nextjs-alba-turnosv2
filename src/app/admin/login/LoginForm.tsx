"use client";

import { loginAction } from "@/app/_actions/login-action";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
    const [error, setError] = useState<string | undefined>(undefined);
    const router = useRouter();
    const handleSubmit = async (formData: FormData) => {
        if (!formData.get("password")) {
            return;
        }
        const result = await loginAction(formData);
        if (result.success) {
            router.push(redirectTo);
        } else {
            setError(result.error);
        }
    };

    return (
        <form
            action={handleSubmit}
            className="flex flex-col gap-4 items-center w-3/4 relative"
        >
            <input
                type="number"
                name="password"
                className="text-center shadow-[3px_3px_5px_0px_rgba(0,0,0,0.2)] w-1/2 p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="w-1/2 p-2 bg-pink-300 border border-[#444]/20 rounded tracking-wider font-semibold shadow-lg cursor-pointer"
            >
                Ingresar
            </button>
            {error && (
                <p className="text-red-500 absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    {error}
                </p>
            )}
        </form>
    );
}

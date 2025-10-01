"use server";

import Image from "next/image";
import LoginForm from "./LoginForm";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const redirectTo = (await searchParams).redirect ?? "/admin";

    return (
        <section className="mt-20 w-[95dvw] min-h-[60dvh] m-5 mb-12 flex flex-col gap-4 items-center justify-center overflow-hidden bg-pink-100 rounded-lg shadow">
            <div className="shadow-lg rounded-full">
                <Image
                    src="/logo.webp"
                    alt="services"
                    width={200}
                    height={200}
                />
            </div>

            <LoginForm redirectTo={redirectTo} />
        </section>
    );
}

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
        <section className="mt-20 w-1/3 min-h-[70dvh] m-5 mb-12 flex flex-col gap-4 items-center justify-center overflow-hidden bg-pink-100 rounded-lg shadow">
            <div className="shadow-lg rounded-full size-[200px] 2xl:size-[300px] relative">
                <Image src="/logo.webp" alt="services" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>

            <LoginForm redirectTo={redirectTo} />
        </section>
    );
}

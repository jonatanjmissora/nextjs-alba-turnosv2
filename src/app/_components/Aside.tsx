import Image from "next/image";

export default function Aside() {
    return (
        <aside className="w-1/3 h-full relative overflow-hidden shadow bg-gradient-to-b from-pink-100 via-[#FADBE0] to-[#ffc0cb]">
            <div className="absolute top-4 right-4 size-[200px]">
                <Image
                    src="/logo.webp"
                    alt="services"
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute -bottom-6 -left-1 size-[240px]">
                <Image
                    src="/alba-alpha.png"
                    alt="services"
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute bottom-0 w-full h-16 flex justify-around items-center bg-[#ffc0cb] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
                <Image
                    src="/whatsapp_icon.svg"
                    alt="whatsapp"
                    width={30}
                    height={30}
                />
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
            </div>
        </aside>
    );
}

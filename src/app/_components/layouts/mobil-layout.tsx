import Image from "next/image";
import MobilTimeLine from "../timeline/mobil-timeline";

export default function MobilLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="w-[95%] rounded-lg flex flex-col bg-gradient-to-b from-pink-100 via-[#FADBE0] to-[#ffc0cb] shadow-[6px_6px_10px_3px_rgba(0,0,0,0.15)] overflow-hidden relative pt-22 pb-52">
            <ImageBGLayout />

            <h2 className="px-3 w-full text-left text-xl font-semibold tracking-wider text-[#444] mb-8">
                {title}
            </h2>

            {children}

            <div className="mt-10">
                <MobilTimeLine />
            </div>

            <MobilFooter />
        </div>
    );
}

const ImageBGLayout = () => {
    return (
        <>
            <div className="absolute top-4 right-4 size-[100px] rounded-full logo-spark">
                <Image
                    src="/logo.webp"
                    alt="services"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute -bottom-18 -left-1 z-10 w-[200px] h-[300px]">
                <Image
                    src="/alba-alpha.png"
                    alt="services"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </>
    );
};

const MobilFooter = () => {
    return (
        <div className="absolute bottom-0 h-20 w-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]">
            <div className="h-full w-full flex justify-end items-center gap-8 pr-8">
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
        </div>
    );
};

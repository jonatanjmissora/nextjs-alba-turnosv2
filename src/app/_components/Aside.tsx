import Image from "next/image";

export default function Aside() {
  return (
    <aside className="w-1/3 h-full relative overflow-hidden shadow bg-gradient-to-b from-pink-100 via-[#FADBE0] to-[#ffc0cb]">
      <div className="absolute top-0 left-0">
        <Image src="/logo.jpg" alt="services" width={300} height={240} />
      </div>
      <div className="absolute -bottom-6 -left-1">
        <Image src="/alba-alpha.png" alt="services" width={240} height={240} />
      </div>
      <div className="absolute bottom-0 w-full h-16 flex justify-around items-center bg-[#ffc0cb] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
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
      </div>
    </aside>
  );
}

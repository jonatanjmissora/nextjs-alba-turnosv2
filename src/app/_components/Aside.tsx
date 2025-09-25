import Image from "next/image";

export default function Aside() {
  return (
    <aside className="w-1/3 h-full relative overflow-hidden shadow-xl">
      <div className="absolute top-0 left-0">
        <Image src="/logo.jpg" alt="services" width={260} height={240} />
      </div>
      <div className="absolute -bottom-24 -left-1">
        <Image src="/alba-alpha.png" alt="services" width={240} height={240} />
      </div>
      <div></div>
    </aside>
  );
}

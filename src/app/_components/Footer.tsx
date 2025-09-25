import Link from "next/link";
import Image from "next/image";

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
  return (
    <article className="w-full flex justify-around items-center">
      <button
        className="bg-[#ffb6c0] p-2  rounded text-xs text-[#444]/50 tracking-wider font-medium"
        type="button"
      >
        ATRAS
      </button>

      <ul className="flex gap-4">
        <li className="bg-[#ffdbdf] p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow">
          1
        </li>
        <li className="bg-[#ffb6c0] p-2 rounded-full text-xs text-[#444] tracking-wider font-medium">
          2
        </li>
        <li className="bg-[#ffb6c0] p-2 rounded-full text-xs text-[#444] tracking-wider font-medium">
          3
        </li>
      </ul>

      <Link
        href="/calendar"
        className="bg-[#ffdbdf] p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow"
        type="button"
      >
        SIGUIENTE
      </Link>
    </article>
  );
};

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-slate-950">
//       <ServicesPage />

import ServicesAccordion from "../_components/01-services/accordion";

//     </div>
//   )
// }
export default function Services() {
  return (
    <section className="w-2/3 h-[500px] mx-2">
      <h2 className="text-xl text-[#444] p-8 py-4 border-b border-[#444]/20">
        Selecciona un servicio
      </h2>
      <ServicesAccordion />
    </section>
  );
}

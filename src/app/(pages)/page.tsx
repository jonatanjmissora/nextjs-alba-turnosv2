import ServicesPage from "../_components/01-services/main"

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-slate-950">
      <ServicesPage />
      <footer className="w-screen px-10 h-10 flex items-center justify-end">
        k@toDev
      </footer>
    </div>
  )
}

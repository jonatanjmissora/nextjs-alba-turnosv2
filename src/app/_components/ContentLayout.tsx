export default function ContentLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="flex-1 flex flex-col w-full h-[500px] p-4 pt-6">
            <h2 className="text-xl text-[#444] p-8 py-4 border-b border-[#444]/20">
                {title}
            </h2>
            <div className="flex flex-col gap-4 justify-center items-center w-2/3 m-auto flex-1">
                {children}
            </div>
        </section>
    );
}

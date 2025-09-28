"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

function Loading() {
    return (
        <article className="flex-1 flex flex-col justify-center items-center w-full sm:h-[450px] 2xl:h-[500px]">
            <Spinner variant={"bars"} size={50} />
        </article>
    );
}

export default Loading;

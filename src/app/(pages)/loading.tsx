"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

function Loading() {
    return (
        <article className="h-full w-full flex items-center justify-center">
            <Spinner variant={"bars"} size={50} />
        </article>
    );
}

export default Loading;

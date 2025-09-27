"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

const Example = () => (
    <article className="h-full w-full flex items-center justify-center gap-8 bg-blue-200 border-2 border-black">
        <Spinner variant={"bars"} size={50} />
    </article>
);

export default Example;

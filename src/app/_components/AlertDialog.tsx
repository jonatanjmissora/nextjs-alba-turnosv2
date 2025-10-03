import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DeleteBtn from "./admin/DeleteBtn";
import { useState } from "react";
import { deleteTurnoAction } from "../_actions/turno-actions";

export function AlertDialogComponent({
    children,
    turnoId,
}: {
    children: React.ReactNode;
    turnoId: number;
}) {
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        if (turnoId) {
            const res = await deleteTurnoAction(turnoId);
            console.log("RES", res);
            setOpen(false);
        } else return;
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger
                asChild
                className="cursor-pointer h-full w-full p-2 2xl:p-4"
            >
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#333] text-balance text-center">
                        ¿ Albana, estas segura de eliminar este turno ?
                    </AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="tracking-wider font-semibold bg-pink-50/80">
                        Cancelar
                    </AlertDialogCancel>
                    <form action={handleDelete}>
                        <DeleteBtn />
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

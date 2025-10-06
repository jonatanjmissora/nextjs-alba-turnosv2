import { deleteTurnoAction } from "@/app/_actions/turno-actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TurnoType } from "./types";

export const useDeleteTurno = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTurnoAction,
        onMutate: async (id: number) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ["turnos"] });

            // Snapshot the previous value
            const previousTurnos = queryClient.getQueryData<TurnoType[]>([
                "turnos",
            ]);

            // Optimistically update the cache
            if (previousTurnos) {
                const newTurnos = previousTurnos.filter((t) => t.id !== id);
                queryClient.setQueryData(["turnos"], newTurnos);
            }

            // Return a context object with the snapshotted value
            return { previousTurnos };
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, _id, context) => {
            console.error("Error deleting turno:", err);
            if (context?.previousTurnos) {
                queryClient.setQueryData(["turnos"], context.previousTurnos);
            }
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["turnos"] });
        },
    });
};

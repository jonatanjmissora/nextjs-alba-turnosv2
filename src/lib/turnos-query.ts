import { useQuery } from "@tanstack/react-query";
import { getAllTurnosAction } from "@/app/_actions/turno-actions";

export const useTurnos = () => {
    const {
        data,
        error,
        isError,
        isLoading,
        isRefetching,
        status,
        isFetching,
    } = useQuery({
        queryKey: ["turnos"],
        queryFn: getAllTurnosAction,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchInterval: 15 * 1000,
    });
    return {
        turnos: data || [],
        error,
        isError,
        isLoading,
        isRefetching,
        status,
        isFetching,
    };
};

import { useQuery } from "@tanstack/react-query";
import { getAllServicesAction } from "@/app/_actions/service-actions";

export const useServices = () => {
    const {
        data,
        error,
        isError,
        isLoading,
        isRefetching,
        status,
        isFetching,
    } = useQuery({
        queryKey: ["services"],
        queryFn: getAllServicesAction,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
    });
    return {
        services: data || [],
        error,
        isError,
        isLoading,
        isRefetching,
        status,
        isFetching,
    };
};

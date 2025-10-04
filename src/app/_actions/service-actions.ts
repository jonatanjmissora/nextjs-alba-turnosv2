"use server";

import { supabase } from "@/db/server";
import type { ServiceType } from "@/lib/types";

export const getAllServicesAction = async (): Promise<ServiceType[]> => {
    try {
        const { data, error } = await supabase.from("servicios").select("*");
        if (error) {
            console.error("Error fetching services:", error);
            throw new Error("Error fetching services");
        }
        console.log("Services fetched successfully!!");
        return data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

"use server";

import { supabase } from "@/db/server";

export const getAllServicesAction = async () => {
    try {
        const res = await supabase.from("servicios").select("*");
        if (res.error) {
            console.error("Error fetching services:", res.error);
            throw new Error("Error fetching services");
        }
        return res;
    } catch (error) {
        console.error("Error fetching services:", error);
        return { data: [], error };
    }
};

export const addTurnoAction = async (
    service: string,
    date: string,
    time: string,
    name: string,
    phone: string,
) => {
    console.log(service, date, time, name, phone);
};

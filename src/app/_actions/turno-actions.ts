"use server";

import { supabase } from "@/db/server";

export const addTurnoAction = async (
    service: string,
    date: string,
    time: string,
    name: string,
    phone: string,
) => {
    try {
        const res = await supabase.from("turnos").insert({
            service,
            date,
            time,
            name,
            phone,
        });
        console.log("RES", res);
        if (res.error) {
            console.error("Error adding turno:", res.error);
            throw new Error("Error adding turno");
        }
        return res;
    } catch (error) {
        console.error("Error adding turno:", error);
        return { data: [], error };
    }
};

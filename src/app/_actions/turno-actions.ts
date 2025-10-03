"use server";

import { supabase } from "@/db/server";


export const addTurnoAction = async (
    service: number,
    date: string,
    time: string,
    name: string,
    phone: string,
) => {
    try {

        const id = Number(date.substring(0, 10).replaceAll("-", "") + time.substring(0, 5).replace(":", ""))

        const newTurno = {
            id: id,
            servicio: service,
            fecha: date,
            hora: time,
            nombre: name,
            telefono: phone,
            user_id: process.env.NEXT_PUBLIC_SUPABASE_USER_ID,
        }

        const res = await supabase
            .from("turnos_alba")
            .insert(newTurno)
            .select();

        if (res.error) {
            console.error("Error adding turno:", res.error);
            throw new Error("Error adding turno");
        }
        console.log("Turno added successfully:", res.data);
        return res;
    } catch (error) {
        console.error("Error adding turno:", error);
        return { data: [], error };
    }
};

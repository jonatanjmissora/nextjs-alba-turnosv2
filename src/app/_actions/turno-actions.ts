"use server";

import { supabase } from "@/db/server";
import { revalidatePath } from "next/cache";

export const getAllTurnosAction = async () => {
    try {
        const res = await supabase
            .from("turnos_alba")
            .select("*, servicios (*)");

        if (res.error) {
            console.error("Error getting turnos:", res.error);
            throw new Error("Error getting turnos");
        }

        console.log("Turnos fetched successfully!!");
        return res;
    } catch (error) {
        console.error("Error getting turnos:", error);
        return { data: [], error };
    }
};

export const addTurnoAction = async (
    service: number,
    date: string,
    time: string,
    name: string,
    phone: string,
) => {
    try {
        const id = Number(
            date.substring(0, 10).replaceAll("-", "") +
                time.substring(0, 5).replace(":", ""),
        );

        const newTurno = {
            id: id,
            servicio: service,
            fecha: date,
            hora: time,
            nombre: name,
            telefono: phone,
        };

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

export const deleteTurnoAction = async (id: number) => {
    try {
        const res = await supabase
            .from("turnos_alba")
            .delete()
            .eq("id", id)
            .select();

        if (res.error) {
            console.error("Error deleting turno:", res.error);
            throw new Error("Error deleting turno");
        }
        console.log("Turno deleted successfully:", res);
        revalidatePath("/admin");
        return res;
    } catch (error) {
        console.error("Error deleting turno:", error);
        return { data: [], error };
    }
};

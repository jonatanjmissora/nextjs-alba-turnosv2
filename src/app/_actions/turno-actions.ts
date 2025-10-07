"use server";

import { supabase } from "@/db/server";
import type { TurnoType } from "@/lib/types";

export const getAllTurnosAction = async (): Promise<TurnoType[]> => {
    try {
        const { data, error } = await supabase
            .from("turnos_alba")
            .select("*, servicios (*)");

        if (error) {
            console.error("Error getting turnos:", error);
            throw new Error("Error getting turnos");
        }

        console.log("Turnos fetched successfully!!");
        return data;
    } catch (error) {
        console.error("Error getting turnos:", error);
        return [];
    }
};

export const addTurnoAction = async (newTurno: TurnoType) => {
    try {
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
        return res;
    } catch (error) {
        console.error("Error deleting turno:", error);
        return { data: [], error };
    }
};

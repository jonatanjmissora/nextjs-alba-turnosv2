import { z } from "zod";

export const schemaTurno = z.object({
    id: z.number().min(202500000000).max(202512311900),
    servicio: z.number().min(0).max(100),
    fecha: z.string().trim().min(10).max(10),
    hora: z.string().trim().min(5).max(5),
    nombre: z.string().trim().min(4).max(50),
    telefono: z.string().trim().min(8).max(10),
});

export type TurnoType = z.infer<typeof schemaTurno>;

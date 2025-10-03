import type { TurnoType } from "@/lib/turnos-mock";
import AdminContainer from "../_components/admin/AdminContainer";
import { getAllTurnosAction } from "../_actions/turno-actions";

export default async function AdminPage() {
    const { data: turnos, error } = (await getAllTurnosAction()) as {
        data: TurnoType[];
        error: string;
    };

    return <AdminContainer turnos={turnos} error={error} />;
}

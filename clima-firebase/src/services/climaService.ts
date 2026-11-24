import { get, ref } from "firebase/database";
import { database } from "../firebase/firebase";
import type { Clima } from "../types/Clima";

export async function obtenerClima( collection: string ): Promise<Clima | null> {

  const referencia = ref(database, `${collection}`);

  const snapshot = await get(referencia);

  if (snapshot.exists()) {
    return snapshot.val() as Clima;
  }

  return null;
}
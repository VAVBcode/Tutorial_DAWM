import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebase";
import type { Clima } from "../types/Clima";

export default function useFetchData( ciudad: string ) {

  const [clima, setClima] = useState<Clima | null>(null);

  useEffect(() => {

    if (!ciudad) {
      return;
    }

    const referencia = ref(database, `clima/${ciudad}`);

    const cancelarSuscripcion = onValue(referencia, (snapshot) => {
      setClima(snapshot.exists() ? snapshot.val() as Clima : null);
    });

    return cancelarSuscripcion;

  }, [ciudad]);

  return { clima }
}
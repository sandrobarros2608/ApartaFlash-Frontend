import { useReducer, useState } from "react";
import { traerTodosLosApto } from "../api/aptoService";
import { apartamentoReducer } from "../reducer/apartamentoReducer";

const inicialAptos = [];
export const useListaApartamento = () => {

    const [activarModal, setActivarModal] = useState(false);
    const [apto, dispatch] = useReducer(apartamentoReducer, inicialAptos);

    const handlerAgendarApartamento = () => {
        setActivarModal(true);
    }

    const handlerTraerAptos = async () => {
        const result = await traerTodosLosApto();
        console.log("Backend response: " + result);
        dispatch({
            type: 'CargandoAptos',
            payload: result.data,
        })
    }

    return {
        apto,
        activarModal,

        handlerTraerAptos,
        handlerAgendarApartamento
    }
}
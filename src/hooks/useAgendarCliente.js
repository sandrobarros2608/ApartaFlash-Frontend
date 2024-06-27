import { useReducer, useState } from "react";
import { crearCliente } from "../api/clienteService";
import { clienteReducer } from "../reducer/clienteReducer";
import Swal from "sweetalert2";

const inicialCliente = [];
export const useAgendarCliente = () => {

    const [activarModal, setActivarModal] = useState(false);
    const [aptoId, setAptoId] = useState(0);
    const [cliente, dispatch] = useReducer(clienteReducer, inicialCliente);

    const handlerCrearCliente = async (formulario) => {
        let response = await crearCliente({ ...formulario, apto: { id: aptoId } });
        dispatch({
            type: 'CrearCliente',
            payload: response.data,
        });
        Swal.fire({
            title: "Cliente agendado!",
            text: "El cliente se ha agendado al apartamento seleccionado!",
            icon: "success"
        });
        setActivarModal(false);
    }

    const handlerAptoId = (id) => {
        console.log(id);
        setAptoId(id);
    }


    const handlerAgendarApartamento = () => {
        setActivarModal(true);
    }

    return {
        activarModal,

        handlerCrearCliente,
        handlerAgendarApartamento,
        handlerAptoId,
    }
}
import axios from "axios";

const BASE_URL_CLIENTE = 'http://localhost:8080/Clientes';

export const crearCliente = async ({ cedula, nombre, apellido, apto }) => {
    try {
        return await axios.post(`${BASE_URL_CLIENTE}/`, {
            cedula,
            nombre,
            apellido,
            apto
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

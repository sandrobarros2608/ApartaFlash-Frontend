import axios from "axios";

const BASE_URL_APTO = 'http://localhost:8080/Aptos';

export const crearApto = () => {

}

export const traerApto = () => {
    
}

export const traerTodosLosApto = async () => {
    try {
        const response = await axios.get(`${BASE_URL_APTO}/`);
        return response;
    } catch (error) {

    }
    return null;
}

export const eliminarApto = () => {
    
}
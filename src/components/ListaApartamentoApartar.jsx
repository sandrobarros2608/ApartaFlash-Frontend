import { useState } from "react"
import Swal from "sweetalert2";

const inicialFormulario = {
    cedula: 0,
    nombre: '',
    apellido: '',
}
export const ListaApartamentoApartar = ({handlerCrearCliente}) => {

    const [formulario, setFormulario] = useState(inicialFormulario);
    const { cedula, nombre, apellido } = formulario;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formulario);
        if (!cedula || !nombre || !apellido) {
            Swal.fire({
                icon: "error",
                title: "Oops... Algo esta mal!",
                text: "Completa el formulario!",
            });
            return;
        }
        handlerCrearCliente(formulario);
        setFormulario(inicialFormulario);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Cedula"
                    name="cedula"
                    value={cedula}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Apellido"
                    name="apellido"
                    value={apellido}
                    onChange={onInputChange}
                />
                <button
                    className="btn btn-dark"
                    type="submit">
                    Agendar
                </button>
            </form>
        </>
    )
}

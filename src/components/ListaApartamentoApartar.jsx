export const ListaApartamentoApartar = () => {
    return (
        <>
            <form >
                <div className="modal-body">
                    <input
                        type="text"
                        className="form-control my-3 w-75"
                        placeholder="Cedula"
                        name="cedula"
                    />
                    <input
                        type="text"
                        className="form-control my-3 w-75"
                        placeholder="Nombre"
                        name="nombre"
                    />
                    <input
                        type="text"
                        className="form-control my-3 w-75"
                        placeholder="Apellido"
                        name="apellido"
                    />
                </div>
                <div className="modal-footer">
                    <button
                        type="submit"
                        className="btn btn-dark">
                        Agendar
                    </button>
                    <button
                        type="submit"
                        className="btn btn-dark">
                        Cerrar
                    </button>
                </div>
            </form>
        </>
    )
}

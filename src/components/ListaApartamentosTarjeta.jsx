export const ListaApartamentosTarjeta = ({id, nombre, descripcion, handlerAgendarApartamento, handlerAptoId}) => {

    const onAgendarApartamento = (id) => {
        handlerAgendarApartamento();
        handlerAptoId(id);
    }

    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">

                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">{nombre}</h5>

                            {descripcion}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button className="btn btn-dark regular-button" onClick={() => onAgendarApartamento({id})}>Apartar</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

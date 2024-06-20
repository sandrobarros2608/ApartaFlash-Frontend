export const NavbarListaApartamento = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">ApartaFlash</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Control de Aptos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Recibos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Busqueda Personalizada</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

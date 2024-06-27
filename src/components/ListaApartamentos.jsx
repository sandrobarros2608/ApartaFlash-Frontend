import { useEffect } from "react";
import "../styles.css"
import { FooterListaApartamento } from "./FooterListaApartamento"
import { HeaderListaApartamento } from "./HeaderListaApartamento"
import { NavbarListaApartamento } from "./NavbarListaApartamento"
import { ListaApartamentosTarjeta } from "./ListaApartamentosTarjeta";
import { useListaApartamento } from "../hooks/useListaApartamentos";
import { ListaApartamentoApartar } from "./ListaApartamentoApartar";
import { useAgendarCliente } from "../hooks/useAgendarCliente";

export const ListaApartamentos = () => {

    const { apto, handlerTraerAptos } = useListaApartamento();
    const { activarModal, handlerAgendarApartamento, handlerCrearCliente, handlerAptoId } = useAgendarCliente();
    

    useEffect(() => {
        handlerTraerAptos();
    }, []);

    return (
        <>
            <NavbarListaApartamento />

            <HeaderListaApartamento />

            {!activarModal || <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={{ display: "block" }} tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Agendar Apartamento
                                </h5>
                            </div>
                            <div className="modal-body">
                                <ListaApartamentoApartar handlerCrearCliente={handlerCrearCliente}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {apto.map((tarjeta) => (
                            <ListaApartamentosTarjeta
                                key={tarjeta.id}
                                id={tarjeta.id}
                                nombre={tarjeta.nombre}
                                descripcion={tarjeta.descripcion}
                                handlerAgendarApartamento={handlerAgendarApartamento}
                                handlerAptoId={handlerAptoId} />
                        ))}
                    </div>
                </div>
            </section>

            <FooterListaApartamento />
        </>
    )
}

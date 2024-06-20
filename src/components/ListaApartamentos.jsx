import { useEffect } from "react";
import { FooterListaApartamento } from "./FooterListaApartamento"
import { HeaderListaApartamento } from "./HeaderListaApartamento"
import { NavbarListaApartamento } from "./NavbarListaApartamento"
import { ListaApartamentosTarjeta } from "./ListaApartamentosTarjeta";
import { useListaApartamento } from "../hooks/useListaApartamentos";

export const ListaApartamentos = () => {

    const { apto, handlerTraerAptos } = useListaApartamento();

    useEffect(() => {
        handlerTraerAptos();
    }, []);

    return (
        <>
            <NavbarListaApartamento />

            <HeaderListaApartamento />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {apto.map((tarjeta) => (
                            <ListaApartamentosTarjeta key={tarjeta.id} nombre={tarjeta.nombre} descripcion={tarjeta.descripcion} />
                        ))}
                    </div>
                </div>
            </section>

            <FooterListaApartamento />
        </>
    )
}

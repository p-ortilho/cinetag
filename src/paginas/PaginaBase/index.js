import { Outlet } from "react-router";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import FavoritosProvider from "context/FavoritosContextos";

const PaginaBase = () => {
    return(
        <main>
            <Cabecalho/>
            <Banner/>
            <Titulo/>
            <Container>
                <FavoritosProvider>
                    <Outlet/>
                </FavoritosProvider>
            </Container>
            <Rodape/>
        </main>
    );
};

export default PaginaBase;
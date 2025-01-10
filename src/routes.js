import Favoritos from "paginas/Favoritos";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import FavoritosProvider from "context/FavoritosContextos";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Cabecalho/>
            <Banner/>
            <Titulo/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}/>
                        <Route path="/favoritos" element={<Favoritos/>}/>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape/>
        </BrowserRouter>
    );
};

export default AppRoutes;
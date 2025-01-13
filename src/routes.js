import Favoritos from "paginas/Favoritos";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";
import Player from "paginas/Player";
import NaoEncontrado from "paginas/NaoEncontrado";
import PaginaBase from "paginas/PaginaBase";

const AppRoutes = () => {
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase/>}>
                            <Route index element={<Inicio/>}/>
                            <Route path="favoritos" element={<Favoritos/>}/>
                            <Route path="video/:id" element={<Player/>}/>
                            <Route path="*" element={<NaoEncontrado/>}/>
                        </Route>
                    </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
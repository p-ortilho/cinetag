import Inicio from "./paginas/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
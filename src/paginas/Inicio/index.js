import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Titulo from "componentes/Titulo";

const Inicio = () => {
    return(
        <>
            <Cabecalho/>
            <Banner imagem={'home'}/>
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <Rodape/>
        </>
    );
};

export default Inicio;
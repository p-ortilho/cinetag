import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Card from "componentes/Card";
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
            <Card titulo={'Billie'} id={'1'} imagem={'https://media.globalcitizen.org/thumbnails/bc/df/bcdf3412-5ec9-4ddd-ba4d-d409623b225c/billieeilish.jpg__1600x900_q85_crop_subsampling-2.jpg'}/>
            <Rodape/>
        </>
    );
};

export default Inicio;
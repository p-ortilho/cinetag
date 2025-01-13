import { useLocation } from 'react-router';
import styles from './Titulo.module.css'

const Titulo = () => {
    const rota = useLocation();
    const titulo = rota.pathname === '/'? 'Um lugar para guardar seus vídeos e filmes!' :  rota.pathname === '/favoritos'?'Favoritos' : 'Player';
    return(
        <div className={styles.titulo}>
            <h1>
                {titulo}
            </h1>
        </div>
    );
};

export default Titulo;
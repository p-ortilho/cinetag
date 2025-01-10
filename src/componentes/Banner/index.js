import styles from './Banner.module.css';
import { useLocation } from 'react-router';

const Banner = () => {

    const rota = useLocation();
    const imagem = rota.pathname === '/'? 'home' : 'favoritos';

    return(
        <div className={styles.banner} style={{backgroundImage: `url(/imagens/banner-${imagem}.png)`}}>
        </div>
    );
};

export default Banner;
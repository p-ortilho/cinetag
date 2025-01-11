import { useFavoritos } from 'hooks/useFavoritos';
import styles from './Card.module.css';
import iconeDesfavoritar from './desfavoritar.png';
import iconeFavoritar from './favoritar.png';

const Card = ({titulo, id, imagem}) => {
    const {favoritos, adicionarFavorito} = useFavoritos();
    // verifica se o item já foi favoritado
    const favoritoAtivo = !(favoritos.some(item => item.id === id));
    const icone = favoritoAtivo ?   iconeDesfavoritar : iconeFavoritar;
    return(
        <div className={styles.container}>
            <img src={imagem} alt={titulo}/>
            <h1>{titulo}</h1>
            <img src={icone} alt="Favoritar" className={styles.favoritar} onClick={() => {adicionarFavorito({id, titulo, imagem})}}/>
        </div>
    );
};

export default Card;
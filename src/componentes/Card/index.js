import styles from './Card.module.css';
import iconeFavoritar from './desfavoritar.png';

const Card = ({titulo, id, imagem}) => {
    return(
        <div className={styles.container}>
            <img src={imagem} alt={titulo}/>
            <h1>{titulo}</h1>
            <img src={iconeFavoritar} alt="Favoritar" className={styles.favoritar}/>
        </div>
    );
};

export default Card;
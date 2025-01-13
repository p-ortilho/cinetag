import { useFavoritos } from 'hooks/useFavoritos';
import styles from './Favoritos.module.css';
import Card from 'componentes/Card';

const Favoritos = () => {
    const {favoritos} = useFavoritos();
    return(
        <section className={styles.favoritos}>
            {favoritos.map((favorito) => {
                return <Card key={favorito.id} {...favorito} />
            })}
        </section>
    );
};

export default Favoritos;
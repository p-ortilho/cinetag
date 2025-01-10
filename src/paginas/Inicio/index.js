import Card from "componentes/Card";
import styles from './Inicio.module.css';
import videos from 'json/db.json'

const Inicio = () => {
    return(
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id}/>
            })}
        </section>
    );
};

export default Inicio;
import videos from 'json/db.json'
import { useParams } from 'react-router';
import styles from './Player.module.css';
import NaoEncontrado from 'paginas/NaoEncontrado';

const Player = () => {
    const paramentros = useParams();
    const video = videos.find((item) => item.id === Number(paramentros.id));

    if (!video) return <NaoEncontrado/>

    return (
        <>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    );
};

export default Player;
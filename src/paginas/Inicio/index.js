import Card from "componentes/Card";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";

const Inicio = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/p-ortilho/cinetag-api/videos")
        .then((resposta) => resposta.json())
        .then((dados) => setVideos(dados));
    }, []);

    return(
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id}/>
            })}
        </section>
    );
};

export default Inicio;
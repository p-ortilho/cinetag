import styles from './NaoEncontrado.module.css';

const NaoEncontrado = () => {
    return (
        <section className={styles.container}>
            <h1>Ops!</h1>
            <p>Conteudo não encontrado!</p>
        </section>
    );
};

export default NaoEncontrado;
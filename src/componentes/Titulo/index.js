import styles from './Titulo.module.css'

const Titulo = ({children}) => {
    return(
        <div className={styles.titulo}>
            {children}
        </div>
    );
};

export default Titulo;
import { Link } from "react-router";
import styles from "./CabecalhoLink.module.css";

const CabecalhoLink = ({url, children}) => {
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    );
};

export default CabecalhoLink;
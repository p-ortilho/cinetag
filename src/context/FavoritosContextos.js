import { createContext, useState } from "react";

export const FavoritosContextos = createContext();
FavoritosContextos.displayName = "FavoritosContextos";

const FavoritosProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);
    return(
        <FavoritosContextos.Provider value={{favoritos, setFavoritos}}>
            {children}    
        </FavoritosContextos.Provider>
    );
};

export default FavoritosProvider; 
import { useContext } from "react";

export const useFavoritos = () => {
    // recuperando o contexto criando no arquivo FavoritosContext.js
    const [favoritos, setFavoritos] = useContext(FavoritosContext);

    // função para adicionar um novo favorito	
    const adicionarFavorito = (novoFavorito) => {
        // verificando se o favorito já foi adicionado
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id);

        let listaAntiga = [...favoritos];

        // se não foi adicionado, adiciona
        if (!favoritoRepetido) {
            let novaLista = listaAntiga.push(novoFavorito);

            return setFavoritos(novaLista);
        }

        // se foi adicionado, remove da lista
        listaAntiga.splice(listaAntiga.findIndex(item => item.id), 1);

        listaAntiga.splice(
            listaAntiga.findIndex(
              item => item.id === listaAntiga.find(item => item.id === novoFavorito.id).id
            ),
            1
          )

        // atualiza o estado
        return setFavoritos(listaAntiga);
    };
    return {
        favoritos,
        adicionarFavorito
    }
};
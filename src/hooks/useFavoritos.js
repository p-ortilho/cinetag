import { FavoritosContext } from "context/FavoritosContextos";
import { useContext } from "react";

export const useFavoritos = () => {
    // Recupera o contexto de FavoritosContext
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    // Função para adicionar um novo favorito
    const adicionarFavorito = (novoFavorito) => {
        // Verifica se o favorito já foi adicionado
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id);

        // Cria uma nova lista de favoritos
        let novaLista = [...favoritos];

        // Se o favorito já foi adicionado, remove da lista
        if (favoritoRepetido) {
            // Filtra a lista de favoritos para remover o item repetido
            novaLista = novaLista.filter(item => item.id !== novoFavorito.id);
        } else {
            // Se o favorito não foi adicionado, adiciona na lista
            novaLista.push(novoFavorito);
        }

        // Atualiza o estado de favoritos
        setFavoritos(novaLista);
    };
    // Retorna a lista de favoritos e a função para adicionar um novo favorito
    return { favoritos, adicionarFavorito };
};
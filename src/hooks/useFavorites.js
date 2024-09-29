import { FavoritesContext } from "context/FavoritesContext";
import { useContext } from "react";
export function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  function changeFavorite(favorite) {
    if (checkRepeated(favorite)) {
      removeFavorite(favorite);
    } else {
      addFavorite(favorite);
    }
  }

  function checkRepeated(favorite) {
    return favorites.some((item) => item.id === favorite.id);
  }

  function removeFavorite(favorite) {
    setFavorites((prevList) =>
      prevList.filter((item) => item.id !== favorite.id)
    );
  }

  function addFavorite(favorite) {
    setFavorites((prevList) => [...prevList, favorite]);
  }

  return { favorites, changeFavorite, checkRepeated };
}

import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import CatalogList from "../../components/CatalogList/CatalogList";
import { InvisibleTitle, Message } from "../../components/UI";

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <main>
      <InvisibleTitle>You favorite campers</InvisibleTitle>
      {favorites.length ? (
        <CatalogList campers={favorites} />
      ) : (
        <Message>No campers added</Message>
      )}
    </main>
  );
};

export default FavoritePage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import CatalogList from "../CatalogList/CatalogList";
import { selectCampers } from "../../redux/campers/selectors";
import { LoadButton } from "../UI";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCampers({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(getCampers({ page: nextPage }));
    setPage(nextPage);
  };

  return (
    <section>
      {campers && <CatalogList campers={campers} />}
      <LoadButton type="button" onClick={handleLoadMore}>
        Load more
      </LoadButton>
    </section>
  );
};

export default Catalog;

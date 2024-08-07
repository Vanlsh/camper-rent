import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/catalog/operations";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCampers({ page: 1 }));
  }, [dispatch]);

  return <section>Catalog</section>;
};

export default Catalog;

import CamperCart from "../CamperCart/CamperCart";
import css from "./CatalogList.module.css";

const CatalogList = ({ campers }) => {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper._id}>
          <CamperCart camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;

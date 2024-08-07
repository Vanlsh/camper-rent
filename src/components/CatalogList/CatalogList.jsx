import CamperCart from "../CamperCart/CamperCart";

const CatalogList = ({ campers }) => {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper._id}>
          <CamperCart camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;

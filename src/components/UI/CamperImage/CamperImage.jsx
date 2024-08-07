import css from "./CamperImage.module.css";

const CamperImage = ({ ...rest }) => {
  return (
    <div className={css.container}>
      <img {...rest} className={css.image}></img>
    </div>
  );
};

export default CamperImage;

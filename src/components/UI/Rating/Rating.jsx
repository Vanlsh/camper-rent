import icons from "../../../assets/icons.svg";
import css from "./Rating.module.css";

const Rating = ({ rating, countReviews }) => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width={16} height={16}>
        <use xlinkHref={icons + "#icon-rating"}></use>
      </svg>
      <span className={css.text}>{`${rating}(${countReviews} Reviews)`}</span>
    </div>
  );
};

export default Rating;

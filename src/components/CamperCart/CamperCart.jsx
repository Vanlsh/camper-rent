import { CamperImage, LoadButton, Location, Rating, Category } from "../UI";
import css from "./CamperCart.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";
import { formatRentPrice, getCategories } from "../../helpers";
import { useModal } from "../../hooks/useModal";
import { useCallback } from "react";
import Modal from "../Modal/Modal";

const CamperCart = ({ camper, liked = true }) => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);
  const categories = getCategories(camper);

  const handleOpenDetails = useCallback(() => {
    setModal(<Modal camper={camper} onClose={closeModal} />);
  }, [setModal, closeModal, camper]);

  return (
    <div className={css.container}>
      <CamperImage src={camper.gallery[0]} alt="Camper photo" />
      <div className={css.info}>
        <div className={css.infoHeader}>
          <h1 className={css.name}>{camper.name}</h1>
          <p className={css.price}>{formatRentPrice(camper.price)}</p>
          <button className={css.buttonIcon}>
            <svg
              className={clsx(css.icon, { [css.liked]: liked })}
              width={24}
              height={24}
            >
              <use xlinkHref={icons + "#icon-unliked"}></use>
            </svg>
          </button>
        </div>
        <div className={css.infoRating}>
          <Rating rating={camper.rating} countReviews={camper.reviews.length} />
          <Location>{camper.location}</Location>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.categoryList}>
          {categories.map(({ iconName, text, styles }, i) => (
            <li key={i}>
              <Category iconPath={icons + "#icon-" + iconName} styles={styles}>
                {text}
              </Category>
            </li>
          ))}
        </ul>
        <LoadButton
          type="button"
          onClick={handleOpenDetails}
          style={{ minWidth: "166px" }}
        >
          Show more
        </LoadButton>
      </div>
    </div>
  );
};

export default CamperCart;

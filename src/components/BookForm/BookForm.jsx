import { BookInput, LoadButton } from "../UI";
import icons from "../../assets/icons.svg";
import css from "./BookForm.module.css";

const BookForm = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <BookInput type="text" placeholder="Name" />
        <BookInput type="text" placeholder="Email" />
        <BookInput
          type="text"
          placeholder="Booking date"
          iconPath={icons + "#icon-calendar"}
        />
        <textarea className={css.textarea} placeholder="Comment"></textarea>
        <LoadButton type={"submit"} style={{ minWidth: "160px" }}>
          Send
        </LoadButton>
      </form>
    </div>
  );
};

export default BookForm;

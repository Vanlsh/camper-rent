import css from "./BookInput.module.css";

const BookInput = ({ iconPath, ...rest }) => {
  return (
    <div className={css.wrapper}>
      {iconPath && (
        <svg className={css.icon} width={20} height={20}>
          <use xlinkHref={iconPath}></use>
        </svg>
      )}
      <input {...rest} className={css.input} />
    </div>
  );
};

export default BookInput;

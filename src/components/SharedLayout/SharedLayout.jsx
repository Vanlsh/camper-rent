import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import Header from "../Header/Header";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;

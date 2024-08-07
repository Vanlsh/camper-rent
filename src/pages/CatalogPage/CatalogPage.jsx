import Catalog from "../../components/Catalog/Catalog";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main className={css.container}>
      <section className={css.filters}>
        <FiltersForm />
      </section>
      <section className={css.catalog}>
        <Catalog />
      </section>
    </main>
  );
};

export default CatalogPage;

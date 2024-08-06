import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Header from "./Header/Header";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));

function App() {
  return (
    <SharedLayout>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;

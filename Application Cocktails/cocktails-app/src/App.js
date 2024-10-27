import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";
import Recette from "./pages/Recette";
import Recherche from "./pages/Recherche";
import Panier from "./pages/Panier";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="favoris" element={<Favoris />} />
          <Route path="recette" element={<Recette />} />
          <Route path="recherche" element={<Recherche />} />
          <Route path="panier" element={<Panier />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { Outlet, Link } from "react-router-dom";
import logo from '../logo.png';

const Layout = () => {
  return (
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="headerText">
          Mixology Haven
        </p>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/favoris">Favoris</Link>
          </li>
          <li>
            <Link to="/recette">Recette</Link>
          </li>
          <li>
            <Link to="/recherche">Recherche</Link>
          </li>
          <li>
            <Link to="/panier">Panier</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;
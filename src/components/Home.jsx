
import { Menu, X, Search } from "lucide-react";
import "./Home.css";

const Home = () => {


  return (
    <header className="header">

      <div className="home-logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>

      <ul className={`home ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Contactos</li>
      </ul>

      <div className="right">
        <div className="search-box">
          <input type="text" placeholder="Pesquisar..." />
          <button><Search size={18} /></button>
        </div>

       
      </div>

    </header>
  );
};

export default Home;

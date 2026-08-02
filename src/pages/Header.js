import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="image-wrapper">
        <Link to="/">
        <img
        className="bannerImg"
        src="https://i.giphy.com/8xUpOuaJL61KEIA55f.webp"
      ></img>
      </Link>
      </div>
      <div className="links">
        <Link to="/cellar">Vintage Cellar</Link>
        <a>Reserve Collection</a>
        <a href="#tips">Vampire tips</a>
        <a>Our mission</a>
      </div>
    </header>
  );
};

export default Header;

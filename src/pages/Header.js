import { HashLink as Link } from "react-router-hash-link";

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
         <Link to="/our-collection">Reserved Collection</Link>
        <Link smooth to="/#tips">Vampire tips</Link>
        <Link to="/mission">Our mission</Link>
      </div>
    </header>
  );
};

export default Header;

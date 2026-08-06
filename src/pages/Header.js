import { HashLink as Link } from "react-router-hash-link";
import { itemsInCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const itemsCount = useSelector(itemsInCart);

  return (
    <header>
      <div className="image-wrapper">
        <Link to="/" aria-label="Go to Vampire Shop">
          <img
            className="bannerImg"
            src="https://i.giphy.com/8xUpOuaJL61KEIA55f.webp"
            alt="sharp teeth covered in blood"
            width="200px"
            height="153px"
          ></img>
        </Link>
        <Link to="/cart" aria-label="Go to cart page">
          <button>Cart{itemsCount > 0 && <span>{itemsCount}</span>}</button>
        </Link>
      </div>
      <div className="links">
        <Link to="/cellar">Vintage Cellar</Link>
        <Link to="/our-collection">Reserved Collection</Link>
        <Link smooth to="/#tips">
          Vampire tips
        </Link>
        <Link to="/mission">Our mission</Link>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <Link to="/" aria-label="Go to Vampire Shop">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"
        alt="flying white bat gif" width="70px" height="70px"></img>
      </Link>
      <p>
        The buy is the principal and sole responsible for the misuse of the
        products we sell.
      </p>
    </footer>
  );
};

export default Footer;

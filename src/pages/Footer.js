import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <Link to="/">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"></img>
      </Link>
      <p>
        The buy is the principal and sole responsible for the misuse of the
        products we sell.
      </p>
    </footer>
  );
};

export default Footer;

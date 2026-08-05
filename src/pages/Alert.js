import { useState, useEffect } from "react";
const Alert = ({type, year, closeAlert}) => {

    const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const closeTimer = setTimeout(() => {
      closeAlert();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, []);


  return (
  <div className={`alertWrapper ${isFading ? 'fade-out' : ''}`}>
    <button onClick={closeAlert}>×</button>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"
        alt="flying white bat gif" width="70px" height="70px"></img>

        <p>{type}, {year} successfully added to cart!</p>
  </div>
  )
};

export default Alert;

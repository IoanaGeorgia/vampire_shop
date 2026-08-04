import testTubeImg from "../images/blod_test.png";
import book from "../images/book.png"

const Mission = () => {
 

  return (

    <div className="missionPage">

      <p className="title">Our mission</p>

      <p className="description">What we hope to achieve is to clench the thirst of all vampires around the world
        by using sustenaible, consent-farmed blood from awake, well-fed and healthy individuals 
        who openly choose to give up their blood.
      </p>

      <img src={book} alt="gothic book" width="100px" height="136px"></img>


      <div className="wrapper">
        <div>
          <p>1. Policy</p>
          <div>Our company makes sure to taste and test the products before shipping them.
            The conditions in which the products are being stored are being bi-yearly verified by
            The Association, with a report being issues and publicly available on THEIR site.
          </div>
        </div>

        
        <div>
          <p>2. Ethical</p>
          <div>
            Hiding in the shadows has been the main reason behind our species' survival. We are openly and forever
            commited to keeping our existence private, as per THEIR notice 3/927/4. Our company abides by the laws
            set in place in the Great Year and we follow them in all our business practices.
            As per such, none of the individuals we farm from are aware of the use of their blood,
            nor are they aware of our existence. The background check and psychological assessment
            are the means we use to protect ourselves from possible allegations and rumours.
          </div>
        </div>


      

        <div>
          <p>3. 100% pure</p>
          <div>
              Our products originate from 100% healthy individuals. Each of them is tested periodically for
              multiple diseases as per THEIR notice from 67/38757/45. Supplimentary tests are being run to comply with the
              new Directives, most exactlly 5/345, 8/35 and 6/356, including drug testing, new poisons testing, 
              smoking and hormol imbalances due to natural or artificial factors. 
          </div>
        </div>

         <div>
          <p>4. Sustainable</p>
          <div>
            All products originate from willing donors, who are being periodically checked for health and mind issues,
            and they also perform psychological assessment to make sure the decision is theirs and only theirs.
            Each individual must provide a prood of their family tree, as well as a background regarding former relations
            with different other vampires. Each profile is submitted to review by the Assiciation and no other
            action is taking place without THEIR explicit consent.
          </div>
        </div>


      </div>

      <div className="divider"></div>

      <div className="disclaimer">
            <p >Disclaimer</p>
      <div>As per THEIR consent and with THEIR inform, our company does not take any political stance
        regarding vampiric habits, way of living and tendencies. Our policy and way of farming is an 
        extension of our practices and should not be considered as approvinf of any behavioral current.
        We neither agree nor do we blame other practices that are not comform with the above stated policy.
        As per THEIR directive 45/56, the free will shall stand against any general inclination or
        tendency in the community.
      </div>
      </div>

    </div>

  );
};

export default Mission;

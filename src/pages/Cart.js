import testTubeImg from "../images/blod_test.png";
import { cellarData, prices } from "../cellarData";
import {
  addToCart,
  removeFromCart,
  removeFromCartFullItem,
} from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { itemsInCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemsNumber = useSelector(itemsInCart);

  const dispatch = useDispatch();

  const addItem = (id) => {
    dispatch(addToCart(id));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const removeItemFull = (id) => {
    dispatch(removeFromCartFullItem(id));
  };

  const calculatePrice = (id, type, count) => {
    return prices[type] * count;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, value) => {
      const itemData = cellarData.find((item) => item.id === value.id);

      const price = itemData ? prices[itemData.bloodType] || 0 : 0;

      return acc + value.count * price;
    }, 0);
  };

  return (
    <div className="cartWrapper">
      <div className="main-area">
        <p className="title">Items in your cart</p>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"
          alt="flying white bat gif"
          width="70px"
          height="70px"
        ></img>
      </div>

      <div className="cartItemsWrapper">
        <div className="disclaimer">
          <p>
            *this page is meant to show an overview of the products you wish to
            buy and it is not a means to buy the products. Its use is also to
            estimate the price of the product.
          </p>

          <p>*payment can be done only as cash and in person</p>
        </div>

        <div className="items">
          {itemsNumber ? (
            cartItems.map((item) => {
              let itemCellar = cellarData.find(
                (itemCellar) => itemCellar.id === item.id,
              );
              return itemCellar ? (
                <div key={item.id} className="itemWrapper">
                  <div className="itemContainer">
                    <button
                      className="close defaultButton"
                      onClick={() => removeItemFull(item.id)}
                    >
                      ×
                    </button>
                    <img
                      src={testTubeImg}
                      alt="Test tube"
                      width="230px"
                      height="230px"
                    />

                    <div className="info">
                      <p>
                        <span>{itemCellar.bloodType}</span>, {itemCellar.year}
                      </p>

                      <div className="quantity">
                        <button
                          className="defaultButton"
                          onClick={() => addItem(item.id)}
                        >
                          +
                        </button>
                        <div>{item.count}</div>
                        <button
                          className="defaultButton"
                          onClick={() => removeItem(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="itemPrice">
                    {calculatePrice(item.id, itemCellar.bloodType, item.count)}{" "}
                    dollars
                  </div>
                </div>
              ) : (
                <p key={item.id} className="error">
                  An error has occurred.
                </p>
              );
            })
          ) : (
            <p className="error">No items in your cart</p>
          )}

          {(itemsNumber || itemsNumber !== 0) && (
            <>
              <div className="total">
                Total: {calculateTotalPrice()} dollars
              </div>
              <div className="phone">Phone: 0799111111</div>
              <div className="info timetable">
                <img
                  src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"
                  alt="wine glass"
                  width="50px"
                  height="50px"
                ></img>
                <div>
                  <p>Monday to Friday</p>
                  <p>9:00PM to 6:00AM</p>
                </div>
                <img
                  src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"
                  alt="wine glass"
                  width="50px"
                  height="50px"
                ></img>
              </div>
            </>
          )}
        </div>

        <div className="steps">
          <p>
            All aquisition of the products will be done according to the steps
            you can find below.
          </p>
          <div>
            <p>1. Phone discussion and negociation</p>
            <p>
              You contact us at the phone number 0799111111. We are available
              Monday to <span>Friday</span>, from 9:00PM to 6:00AM. You will
              tell us the products you wish to buy and <span>their</span>{" "}
              quantity. We will inform you of the availability of the products,
              as well as discuss the next steps.
            </p>
          </div>

          <div>
            <p>2. Background check</p>
            <p>
              Next, we will run a background check on you. It is for{" "}
              <span>both</span> of our safety, as per THEIR general guidelines
              4/23. Is it imperative that you give <span>us</span> your dID, as
              without the dID we cannot run the background check and we cannot
              proceed with the transaction.
            </p>

            <p>
              *vampires non-registered under the dID can provide their iVID,
              however they will have to give us the number of the form for dID
              recovery, as well as <span>the reason</span> for why they have to
              use the iVID.
            </p>

            <p>
              ** We refuse to doany transactions with individuals who cannot
              offer us a valid dID or iVID. Non-registered{" "}
              <span>individuals</span> cannot use our services, as we run under
              directive 5/34/45.
            </p>
          </div>

          <div>
            <p>3. Acquisition</p>
            <p>
              You will be called back for the answer to your background check in
              3-5 working days. If your <span>background</span> check
              corresponds, in this step we will discuss the location of the
              trade. Our agents will meet up with you face to face, ask to see
              your dID or iVID form, and then the <span>exchange</span> of
              products can happen.
            </p>

            <p>
              *As per THEIR directive 4/56, all business under grade 1 TRADE
              will be conducted <span>strictly</span> physically.
            </p>

            <p>
              **Please be <span>sure</span> to have the dID and IVID form with
              you, otherwise the transaction cannot happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

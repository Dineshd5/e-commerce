import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Collection from "./Routes/Collection";
import Men from "./Routes/Men";
import Women from "./Routes/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useReducer, useState } from "react";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import ProductData from "./data";

//reducer function for use reducer
//reducer function expects 2 argu state and action.
function reducer(state, action) {
  //if increase
  if (action.type === "increase") {
    return state + 1;
    //if decrease
  } else if (action.type === "decrease") {
    if (state === 0) return 0;
    return state - 1;
  }
  //if none keep the actual state
  return state;
}

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cartCount, setCartCount] = useState(false);
  const [cart, setCart] = useState([
    {
      id: 1,
      price: 125,
      total: 250,
      quantity: 1,
      MainImg: ProductData[0].MainImg,
    },
  ]);
  const [state, dispatch] = useReducer(reducer, 0);

  //toggle between state open and close cart
  const handleOpen = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };
  //toggle between state open and close cart
  const handleClose = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  const handleDeleteFromCart = (id) => {
    const updatedCart = cart.filter((item, _) => item.id !== id);
    setCart(updatedCart);
    console.log("updatedCart,", updatedCart);
  };

  //Add data to Cart component
  const handleAddToCart = () => {
    if (state === 0) return item;
    setCart((prev) => {
      //getting the prev value from setCart and returning the updated array bcz map() will not mutate the original array.
      if (prev.length === 0) {
        return [
          {
            id: 1,
            price: 125,
            quantity: state,
            total: 125 * state,
            MainImg: ProductData[0].MainImg,
          },
        ];
      }

      // otherwise update the quantity
      return prev.map((item) =>
        item.id === 1
          ? { ...item, quantity: state, total: state * item.price }
          : item
      );
    });
    setCartCount((prev) => !prev);
    console.log(`cart`, cart);
  };

  return (
    <div className="min-h-screen relative">
      <Router>
        <NavBar
          handleDeleteFromCart={handleDeleteFromCart}
          cart={cart}
          state={state}
          cartCount={cartCount}
          handleOpen={handleOpen}
        />

        {isClicked && (
          <>
            {" "}
            <div
              onClick={handleClose}
              className="inset-0 bg-black z-40 fixed opacity-60"
            ></div>{" "}
            <SideBar handleClose={handleClose} />{" "}
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                dispatch={dispatch}
                state={state}
                cart={cart}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          {/* <Route
            path="/"
            element={
              <Cart
                cart={cart}
                handleDeleteFromCart={handleDeleteFromCart}
                handleAddToCart={handleAddToCart}
              />
            }
          /> */}
          <Route path="/collection" element={<Collection />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

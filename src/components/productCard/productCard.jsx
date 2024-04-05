import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
// import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";


function ProductCard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(myContext);
  const { mode, product, searchKey, filterPrice, filterType } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);
  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  // store in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <section className="text-gray-600 text-center body-font">
        <div className="container px-6  py-8 md:py-16 text-center mx-auto">
          <div className=" m-5   border-y  text-center mb-6 lg:mb-10">
          <h1
              style={{ color: mode === "dark" ? "white" : "" }}
              className="sm:text-3xl text-2xl font-Workbench font-medium title-font mb-4  text-slate-500"
            >
             OUR LATEST COLLECTION
            </h1>
          
          </div>
          <div className="flex flex-wrap -m-4">
            {product
              .filter(
                (obj) =>
                  obj.category.toLowerCase().includes(searchKey) ||
                  obj.title.toLowerCase().includes(searchKey)
              )
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <div
                    key={index}
                    onClick={() =>
                      (window.location.href = `/productinfo/${id}`)
                    }
                    className="p-4 md:w-1/4  drop-shadow-lg "
                  >
                    <div
                      className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                          src={imageUrl}
                          alt="blog..."
                        />
                      </div>
                      <div className="p-5 border-t-2">
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ShopInfy
                        </h2>
                        <h1
                          className="title-font text-lg font-medium text-gray-900 mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        <p
                          className="leading-relaxed mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ₹{price}
                        </p>
                        <div className="flex justify-center">
                          <button
                            onClick={() => addCart(item)}
                            type="button"
                            className="focus:outline-none  bg-gradient-to-r from-yellow-100 to-blue-200 bg-indigo-500 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;

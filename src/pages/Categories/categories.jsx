import React, { useContext, useEffect, useState } from "react";
import Category from "../../components/category//Category";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import off from "../../assets/200 off.webp";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const context = useContext(myContext);
  const { mode, product } = context;

  const params = useParams();
  const paramsName = params.name;
  console.log("pmname", paramsName);
  // console.log("pd", product);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const productCategory = product.filter((obj) => {
    if (obj.category.toLowerCase().includes(paramsName)) {
      console.log("obj", obj);
      return obj;
    }
  });

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  // store in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font mb-8">
        <div className="container px-5 py-8 mb-10 md:py-16 mx-auto">
          <div className="lg:w-1/2 text-center mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl border-y text-center font-Workbench font-medium title-font mb-2  text-yellow-600">
              POPULAR CATEGORIES
            </h1>
          </div>

          <div className="flex underline flex-wrap m-4">
            {productCategory.map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div
                  key={index}
                  onClick={() => (window.location.href = `/productinfo/${id}`)}
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
                          className="focus:outline-none text-white bg-indigo-500 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
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
    </Layout>
  );
}

export default CategoryPage;

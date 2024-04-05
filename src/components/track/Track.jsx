import React, { useContext } from "react";
import Assured from "../../assets/assured.png";
import Authentic from "../../assets/Authentic.jpg";
import myContext from "../../context/data/myContext";
import { RiExchangeFill } from "react-icons/ri";

function Track() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div>
      <section className="text-gray-600 mt-8 body-font">
        <div className="container px-2 md:py-2 mb-2  mx-auto">
          <div className="flex flex-wrap -m-2  text-center bg-gray-800">
            <div className="px-2  md:w-1/3 flex flex-col justify-center sm:w-1/2 w-full">
              <div
                className="hover:shadow-xl py-4 rounded-lg hover:bg-gray-500 px-2"
                style={{
                //   backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "rgb(46 49 55)",
                  color: mode === "dark" ? "white" : "white",
                }}
              >
                <div className="flex justify-center">
                  {" "}
                  <RiExchangeFill className="w-14 h-20" />
                </div>
                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "white" }}
                >
                  EASY EXCHANGE
                </h2>
                <p className="leading-relaxed"></p>
              </div>
            </div>

            <div className="p-2 md:w-1/3 sm:w-1/2 w-full">
              <div
                className=" items-center hover:bg-gray-500  text-center px-4 py-6 rounded-lg"
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex py-3 justify-center">
                  <img src={Assured} className="w-12 h-11 rounded-lg" alt="" />
                </div>{" "}
                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "white" }}
                >
                  PREMIUM QUALITY{" "}
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="hover:bg-gray-500  px-2 py-6 rounded-lg"
                style={{
                  color: mode === "dark" ? "white" : "white",
                }}
              >
                <div className="flex justify-center py-2 rounded-lg">
                  <img
                    src={Authentic}
                    className="w-12 h-12  rounded-full mx-auto overflow-hidden"
                    alt=""
                  />
                </div>
                <h2
                  className="title-font font-medium  text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "white" }}
                >
                  AUTHENTIC PRODUCT
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;

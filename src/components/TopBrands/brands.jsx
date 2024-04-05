import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import elizaBrand from "../../assets/elizaBrand.webp";
import reebok from "../../assets/reebok image.webp";
import vero from "../../assets/vero moda.webp";
import allen from "../../assets/allen brand.webp";
import titan from "../../assets/titan brand.webp";
import Puma from "../../assets/pumabrand.webp";
import jack from "../../assets/jack brand'.webp";
import vogue from "../../assets/vogue brand.webp";
import levis from "../../assets/levis brand.webp";
import rayben from "../../assets/ray ben.webp";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";

function TopBrands() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 text-center body-font m-10">
      <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
              TOP BRANDS

              </h1>
              <div className="h-1 w-20 bg-grey-600 "></div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <a href="https://www.titan.co.in/">
              <div className="lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="TopBrands"
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    src={titan}
                  />{" "}
                </div>
              </div>
            </a>
            <a href="https://www.shoppersstop.com/brand/elliza-donatein">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={elizaBrand}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a href="https://in.puma.com/in/en">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={Puma}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
            <a href="https://www.vogue.in/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={vogue}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
            <a href="https://india.ray-ban.com/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={rayben}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a href="https://levi.in/">
              <div className=" lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={levis}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>
            </a>
          
            <a href="https://www.veromoda.in/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={vero}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
            <a href="https://allensolly.abfrl.in/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={allen}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
            <a href="https://reebok.abfrl.in/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={reebok}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
            <a href="https://www.jackjones.in/">
              <div className="lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    src={jack}
                    className="w-52 h-28 mb-8 object-cover object-center  border-2 border-gray-200 bg-gray-100"
                    alt=""
                  />
                </div>
              </div>{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopBrands;

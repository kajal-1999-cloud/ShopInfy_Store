import React, { useContext } from "react";
import Apple from "../../assets/apple.png";
import Earpodes from "../../assets/earpodes.jpg";
import Women from "../../assets/ethinic (1).jpg";
import Men from "../../assets/mens.jpg";
import Shoess from "../../assets/shoess.jpg";
import mobiquick from "../../assets/mobiquick.jpg";
import off from "../../assets/200 off.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/data/myContext";

function Category() {
  const context = useContext(myContext);

  const { mode, searchKey, setSearchKey, filterType, setFilterType, product } =
    context;
const navigate = useNavigate()
const params = useParams()
  const categoryArray = [
    {
      image: Apple,
      name: "mobile",
    },
    {
      image: Earpodes,
      name: "earphone",
    },
    {
      image: Women ,
      name: "women",
    },
    {
      image: Men,
      name: "men",
    },
    {
      image:  Shoess ,
      name: "shoes",
    },
   
  ];
  const image = []
  // console.log("categoryComponent", image);
  return (
    <div className="m-10 text-center">
      <h1 className="sm:text-3xl text-2xl border-t font-Workbench font-medium title-font mb-2  text-yellow-600">
        POPULAR CATEGORIES
      </h1>
      <div className="flex flex-row justify-center items-center mt-10">
    
       {categoryArray.map((item, index) => {
        
       return (
        <div key={index} className="px-5" >
          {/*  */}
        <div  onClick={ () => navigate(`category/${item.name}`)} className=" bg-gradient-to-r from-yellow-200 to-orange-300 w-44 h-52  text-right m-4  bg-sky-200 transition-all hover:bg-pink-400 cursor-pointer">
          <h1 className="text-center px-2 text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
           {item.name}
          </h1>

          <div className="flex justify-center relative items-center w-44 h-48">
            <img
              className="h-3/4 left-8 w-40 h-48 absolute top-0.5"
              src={item.image}
              alt="img"
            />
          </div>
        </div>
      </div>
       )
       })}
       
      </div>
    </div>
  );
}

export default Category;

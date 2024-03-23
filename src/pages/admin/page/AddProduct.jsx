import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";
function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div className="">
      <div className="flex justify-center mt-10 items-center h-screen">
        <div className="bg-gray-300 m-5 px-20 py-10 rounded-xl">
          <div className="">
            <h1 className="text-center text-black text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              value={products.title}
              className="bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              value={products.price}
              className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              value={products.imageUrl}
              className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              value={products.category}
              className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="10"
              rows="7"
              name="description"
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              value={products.description}
              className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" bg-teal-600 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Filter() {
  const context = useContext(myContext);
  const {
    mode,
    searchKey,
    setSearchKey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  const resetFilters = () => {
    setSearchKey(""); 
    setFilterType(""); 
    setFilterPrice(""); 
  };

  return (
    <div className=" container mx-auto px-4 ">
      <div
        className="p-4 mt-10 bg-gray-100 drop-shadow-xl border border-gray-400
"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="bold" >FILTER BY </h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                 
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-2 py-3 w-full -md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <option value="" disabled>
                category
              </option>
              <option value="mobile">MOBILE</option>
              <option value="laptop">LAPTOP</option>
              <option value="tops">TOPS</option>
              <option value="formals">FORMALS</option>
              <option value="casual">CASUAL</option>
              <option value="party wear">PARTY WEAR</option>
              <option value="shirt">SHIRT</option>
              <option value="earphone">EARPHONE</option>
              <option value="tshirt">TSHIRT</option>
            </select>
            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="px-4 py-3 w-full -md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <option value="1000">1000</option>
              <option value="1000">1500</option>
              <option value="1000">2000</option>
              <option value="1000">2500</option>
              <option value="1000">3000</option>
              <option value="1000">3500</option>
              <option value="1000">5000</option>
              <option value="1000">10000</option>
              <option value="1000">50000</option>
            </select>
          <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => resetFilters()}
            className="px-4 py-2 bg-gray-200 hover:bg-white text-gray-900 mx-20 text-sm font-medium "
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Reset Filter
          </button>
        </div>
        </div>
      
        </div>
      </div>
    </div>
  );
}

export default Filter;

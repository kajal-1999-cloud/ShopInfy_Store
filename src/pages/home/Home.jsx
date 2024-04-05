import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/bannerImage/banner";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/productCard";
import TopBrands from "../../components/TopBrands/brands";
import Track from "../../components/track/Track";
import { Link } from "react-router-dom";
import Category from "../../components/category/Category";

function Home() {
  
  return (
    <Layout>
      <Banner />

      <Category/>
      <Filter />
      <ProductCard/>
      <div className="flex justify-center  mb-8">
        <Link to={'/allproducts'}>
          <button className='bg-blue-200  border-blue-200 bg-gradient-to-r from-sky-200 to-blue-400 px-5 py-2 text-bold hover:bg-blue-400 hover:grey-800'>SHOW MORE</button>
        </Link>
      </div>
      <Track/>
      <TopBrands/>
    </Layout>
  );
}

export default Home;

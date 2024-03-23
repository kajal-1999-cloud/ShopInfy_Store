import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { toast } from "react-toastify";

function MyState(props) {
  const { children } = props;
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  useEffect(() => {
    getProductData();
  }, []);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("All fields required");
    }
    const productRef = collection(fireDB, "products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      toast.success("Product Added successfully");
      window.location.href = "/dashboard";
      getProductData();
      // closeModal()
      setLoading(false);
    } catch (e) {
      toast.error("error found", e);
    }
    setProducts("");
  };

  // getting products
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        // limit(5)
      );
      const data = onSnapshot(q, (querySnapshot) => {
        let productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (e) {
      console.log("error ocured -->", e);
      setLoading(false);
    }
  };

const edithandle = async (item) => {
  setLoading(true)
  try{
    // updating the doc
    await setDoc(doc(fireDB, "products", product.id), products);
    toast.success("product updated successfully")
    getProductsData()
    setLoading(false);
    window.location.href = '/dashboard'

  }catch(error) {
    setLoading(false)
    console.log(error)
  }
  setProducts("")
}

const deleteProduct = async (item) => {

  try{
    setLoading(true)
    await deleteDoc(doc(fireDB, "products", item.id));
    toast.success('product Deleted successfully')
    setLoading(false)
    getProductData()
  }catch(error){
    setLoading(false)
  }
}


  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;

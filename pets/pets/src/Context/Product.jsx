import { createContext , useEffect} from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.thedogapi.com/v1/breeds?limit=10&page=0";
const AppProvider = ({children}) => {
const getProducts = async (url) => {
 const res = await axios.get(url);
 const Products = await res.data;
 console.log(
    "~ file: Product.jsx ~ line 12 ~ getProducts ~ products", Products
 )
};

    useEffect(() => {
        getProducts(API);
    
 }, []);  

 return (
     <AppContext.Provider value="astha">{children}</AppContext.Provider>
 );

 }
 export {AppProvider , AppContext}
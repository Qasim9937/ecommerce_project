import { useParams } from "react-router-dom"
import { useContext } from "react";
import { productsContext } from "../contexts/ProductsData";
import NotFound from "./NotFound";


export default function ProductDetails(){
    const {id} = useParams();
    const products = useContext(productsContext).products;
    

    const prod = products.find((item) => String(item.id) === id)

    if(!prod) return <NotFound />;

    return(

            <h1>{prod.name}</h1>

    )
}
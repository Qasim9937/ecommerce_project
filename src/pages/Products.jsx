import { useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../contexts/ProductsData";
import Button from "../components/Button";

export default function Products(){
    const products = useContext(productsContext).products[0];
    const cart = useContext(productsContext).cart;
    const setCart = cart[1]

    return(
        <>

            <div id="products-card">
                {products.map(item => (
                    // <Link to={`/products/${item.id}`}>
                        <div className="product-card" key={item.id}>
                            <img src={item.image} alt={item.image} />
                            <p className="product-name">{item.name}</p>
                            <p className="price">{item.priceCents}</p>
                            <p className="category">{item.category}</p>
                            <p className="sub-category">{item.subCategory}</p>
                            {/* <p className="description">{item.description}</p>
                            <p className="keywords">{item.keywords.map((keyword, index) => (
                                <span key={keyword}>{keyword + ' '}</span>
                            ))}</p> */}

                            <Button text="Add to cart" onClick={() => {
                                setCart(cart => [...cart, item])
                            }}/>
                            
                        </div>

                    
                ))}
            </div>
        </>
    )
}
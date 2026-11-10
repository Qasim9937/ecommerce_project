import data from './data.js'
import { createContext, useState } from 'react'

const productsContext = createContext()

export default function ProductsProvider({children}){

    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])

    return(
        <productsContext.Provider value={{products: [products, setProducts], cart: [cart, setCart]}}>
            {children}
        </productsContext.Provider>
    )
}

export {productsContext}
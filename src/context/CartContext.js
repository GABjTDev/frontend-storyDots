import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, [])

    const data = {
        cart,
        dispatch
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}


export {
    CartContext as default,
    CartContextProvider
}
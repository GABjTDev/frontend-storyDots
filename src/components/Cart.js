import { useState, useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { TYPES } from '../types/types';
import CartProduct from './CartProduct';

const Cart = ({show}) => {

    const {cart, dispatch} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const handleDeleteAll = () => {
        dispatch({
            type: TYPES.DELETE_ALL_PRODUCT
        })
    }

    const handleBuy = () => {
        alert('Compra exitosa');
        dispatch({
            type: TYPES.DELETE_ALL_PRODUCT
        })
    }

    useEffect(() => {

        let totalPrice = cart.reduce((acc, value) => {
            return parseFloat(value.price + acc)
        }, 0)

        setTotal(totalPrice)
    }, [cart])

    return (
        <div className={`cart__container ${show ? 'show': ''}`}>
            {
                cart.length >= 1 ?
                <>
                    {
                        cart.map(c => {
                            return <CartProduct key={c._id} {...c} />
                        })
                    }
                    
                        <p className="price-total">Total: ${total}</p>
                        <button className="btn btn-buy" onClick={handleBuy}>Buy</button>
                        <button className="btn btn-delete-all" onClick={handleDeleteAll}>Delete all cart</button>
                </>
                :
                <p className="cart-empty">Cart is empty</p>
            }

        </div>
    )
}

export default Cart

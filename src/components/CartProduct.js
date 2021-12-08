import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import CartContext from '../context/CartContext';
import { TYPES } from '../types/types';

const CartProduct = ({_id, name, price, image_url}) => {

    const {dispatch} = useContext(CartContext);

    const handleDelete = (id) => {
        dispatch({
            type: TYPES.DELETE_PRODUCT,
            payload: id
        })
    }

    return (
        <>
            <div className="cart__product">
                <div className="cart-image">
                    <img src={image_url} alt={name}/>
                </div>
                
                <div className="cart-text">
                    <h3>{name}</h3>
                    <div className="cart-price-delete">
                        <p>${price}</p>
                        <button onClick={() => handleDelete(_id)}>
                            <AiFillDelete />
                        </button>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default CartProduct

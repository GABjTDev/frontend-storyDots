import { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from "./Cart";

import UserContext from "../context/UserContext"
import CartContext from "../context/CartContext";

const Navbar = () => {

  const {form, setForm} = useContext(UserContext);
  const {cart} = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    setForm({
      user: '',
      password: '',
      admin: false,
      login: false
    })

    localStorage.removeItem('userD')
  }

  const handleShowCart = () => setShow(!show);

  return (
      <nav className="nav">
        <ul className="ul">
          <div className="ul__div">
            <li className="links">
              <NavLink to="/products">Products</NavLink>
            </li>
            {
              form.admin ? 
                  <li className="links">
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                :
                ''
            }
          </div>
          <div className="ul__div">
            <li className="nav-cart">
              <button onClick={handleShowCart}>
                <AiOutlineShoppingCart />
              </button>
              {
                cart.length >= 1 &&
                  <div className="cart-counter">{cart.length}</div>
              }
              <Cart show={show}/>
            </li>
            <li>
              <Link to="/login" onClick={handleLogout}>Logout</Link>
            </li>
          </div>
        </ul>
      </nav>
  )
}

export default Navbar

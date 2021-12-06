import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import UserContext from "../context/UserContext"
import './Navbar.css'

const Navbar = () => {

  const {form, setForm} = useContext(UserContext);

  const handleLogout = () => {
    setForm({
      user: '',
      password: '',
      admin: false,
      login: false
    })

    localStorage.removeItem('userD')
  }

    return (
        <nav className="nav">
          <ul className="ul">
            <div>
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
            <div>
              <li>
                <Link to="/login" onClick={handleLogout}>Logout</Link>
              </li>
            </div>
          </ul>
        </nav>
    )
}

export default Navbar

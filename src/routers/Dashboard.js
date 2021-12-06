import { useContext } from "react";
import { 
    Switch, 
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "../components/Navbar"
import Products from "../components/Products";
import Admin from "../components/Admin";
import ProductScreen from "../components/ProductScreen";
import FormProduct from "../components/FormProduct";
import PrivateAdmin from "./PrivateAdmin";
import UserContext from "../context/UserContext";

const DashboardRoutes = () => {

    const {form} = useContext(UserContext);

    return (
        <>
            <Navbar />

            <div className="container-main">
                <Switch>
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/product/:id" component={ProductScreen} />

                    <PrivateAdmin 
                        exact 
                        path="/admin" 
                        component={Admin}
                        isAdmin={form.admin}
                    />

                    <PrivateAdmin 
                        exact 
                        path="/form/:action" 
                        component={FormProduct}
                        isAdmin={form.admin}
                    />

                    <PrivateAdmin 
                        exact 
                        path="/form/:action/:id" 
                        component={FormProduct}
                        isAdmin={form.admin}
                    />

                    <Redirect to="/products" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
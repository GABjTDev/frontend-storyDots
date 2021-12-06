import { useContext } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from "../components/LoginScreen";
import UserContext from "../context/UserContext";
import DashboardRoutes from "./Dashboard";
import PrivateLogin from "./PrivateLogin";
//import PublicRouter from "./PublicRouter";

const AppRouter = () => {

  const {form} = useContext(UserContext);


  return (
      <Router>
          <div>
              <Switch>
                <Route exact path="/login" component={LoginScreen} />
                  {/* <PublicRouter 
                    exact
                    path="/login"
                    component={LoginScreen}
                    isLogin={form.login}
                  /> */}
                  <PrivateLogin 
                    path="/" 
                    component={DashboardRoutes}
                    isLogin={form.login}
                  />
              </Switch>
          </div>
      </Router>
  )
}

export default AppRouter


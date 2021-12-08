import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";
import AppRouter from "./routers/AppRouter";


//Styles
import './styles/styles.scss';

const App = () => {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <AppRouter />
            </CartContextProvider>
        </UserContextProvider>
    )
}

export default App

import { UserContextProvider } from "./context/UserContext";
import AppRouter from "./routers/AppRouter";

const App = () => {
    return (
        <UserContextProvider>
            <AppRouter />
        </UserContextProvider>
    )
}

export default App

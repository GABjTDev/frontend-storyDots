import { Redirect, Route } from "react-router"

const PrivateLogin = ({
    isLogin,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (isLogin) ?
                    <Component {...props} />
                :
                    <Redirect to="/login" />
            )}
        />
    )
}

export default PrivateLogin


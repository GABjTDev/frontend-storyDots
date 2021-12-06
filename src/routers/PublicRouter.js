import { Redirect, Route } from "react-router"

const PublicRouter = ({
    isLogin,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (isLogin) ?
                    <Redirect to="/products" />
                :
                    <Component {...props} />
            )}
        />
    )
}

export default PublicRouter

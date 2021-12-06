import { Redirect, Route } from "react-router"

const PrivateAdmin = ({
    isAdmin,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (isAdmin) ?
                    <Component {...props} />
                :
                    <Redirect to="/products" />
            )}
        />
    )
}

export default PrivateAdmin

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import App from "../App.jsx"
import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Error from "./Error.jsx"
import Cart from "./Cart.jsx"

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />;
}

export default Router
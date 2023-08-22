import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import App from "../App.jsx"
import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Error from "./Error.jsx"
import Cart from "./Cart.jsx"
import items from "./items.jsx"
import { useState } from 'react'

function Router() {
    const {products} = items;
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const alreadyExists = cart.find(x => x.id === product.id);
        if(alreadyExists) {
            setCart(cart.map(x => x.id === product.id ? {...alreadyExists, qty: alreadyExists.qty + 1} : x))
            console.log(product.name + ' ' + alreadyExists.qty);
        } else {
            setCart([...cart, {...product, qty: 1}])
            console.log(product.name + ' ' + alreadyExists.qty)
        }
    }
    
    const removeFromCart = (product) => {
        const alreadyExists = cart.find((x) => x.id === product.id);
        if(alreadyExists.qty === 1) {
            // setCart(cart.filter((x) => x.id !== product.id));
            console.log(product.name + ' ' + alreadyExists.qty)
        } else {
            setCart(cart.map((x) => x.id === product.id ? {...alreadyExists, qty: alreadyExists.qty - 1} : x));
            console.log(product.name + ' ' + alreadyExists.qty)
        }
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} removeFromCart={removeFromCart} products={products}/>} />
                <Route path="/cart" element={<Cart addToCart = {addToCart} removeFromCart={removeFromCart} cart={cart}/>} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />;
}

export default Router
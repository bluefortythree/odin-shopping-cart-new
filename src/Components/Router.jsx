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
        const test = Number(document.getElementById('item-number-'+product.id).value)
        if(alreadyExists && test>0 && test<=100 && test % 1 === 0) {
            setCart(cart.map(x => x.id === product.id ? {...alreadyExists, qty: alreadyExists.qty + test} : x));
        } else if(test>0 && test<=100 && test % 1 === 0) {
            setCart([...cart, {...product, qty: test}])
        } else {
            alert("Please enter a valid amount!")
        }
    }
    
    const removeFromCart = (product) => {
        if(confirm("Are you sure you want to remove this item from your cart?")) {
            setCart(cart.filter((x) => x.id !== product.id));
        }
    }

    const increment = (product) => {
        const item = cart.find(x => x.id === product.id);
        if(item.qty < 100) {
            setCart(cart.map(x => x.id === product.id ? {...item, qty: item.qty + 1} : x));
        }
    }

    const decrement = (product) => {
        const item = cart.find(x => x.id === product.id);
        if(item.qty === 1) {
            if(confirm("Are you sure you want to remove this item from your cart?")) {
                setCart(cart.filter((x) => x.id !== product.id));
            }
        } else {
            setCart(cart.map(x => x.id === product.id ? {...item, qty: item.qty - 1} : x))
        }
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App cart={cart}/>}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} removeFromCart={removeFromCart} products={products}/>} />
                <Route path="/cart" element={<Cart addToCart = {addToCart} removeFromCart={removeFromCart} increment={increment} decrement ={decrement} cart={cart}/>} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />;
}

export default Router
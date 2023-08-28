import { Link } from "react-router-dom";

function Cart(props) {
    const {cart, removeFromCart, increment, decrement} = props;

    const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
   
    let shipping = () => {
        if(total > 100) {
            return Number(0.00)
        } else {
            return Number(5.00)
        }
    }

    const tax = (total) => {
        return Number((total*0.1).toFixed(2))
    }

    const orderTotal = (total) => {
        if(total > 100) {
            return Number(total*1.1).toFixed(2);
        } else {
            return Number(total*1.1+5).toFixed(2);
        }
    }
    if(cart.length === 0) {
        return (
            <div id="empty-cart-container" className="empty-cart">
                <div id="empty-cart-title">Shopping Cart</div>
                <div id="empty-cart-body">Cart is empty! <Link to="/shop">Go shopping!</Link></div>
            </div>
        )
    }   else {
        return (
            <div>
                <div id="free-shipping-reminder">Orders over $100 qualify for free shipping!</div>
                <div id="non-empty-cart-container" className="non-empty-cart">
                    <div id="cart-left">
                        <div id="cart-title">Shopping Cart</div>
                        <div id="cart-items">
                            {cart.map((item) => (
                                <div className="cart-content" key={item.id}>
                                    <div className="cart-content-left">
                                        <img src={item.url} alt={item.name} className="cart-pics"></img>
                                        <button className="cart-remove-button" onClick={() => removeFromCart(item)}>Remove</button>
                                    </div>
                                    <div className="cart-middle">
                                        <div className="cart-item-name">{item.name} - <span className="cart-item-price">${item.price}/lb.</span></div>
                                        <div className="cart-item-quantity">x {item.qty}</div>
                                        <div className="cart-buttons-container">
                                            <button className="cart-minus-button" onClick={() => decrement(item)}>-</button>
                                            <button className="cart-plus-button" onClick={() => increment(item)}>+</button>
                                        </div>
                                    </div>
                                    <div className="cart-item-total">TOTAL: ${(item.qty*item.price).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="cart-right">
                        <div id="summary-title">Summary</div>
                        <div id="summary-body">
                            <div id="summary-body-left">
                                <div>Items:</div>
                                <div>Shipping:</div>
                                <div>Tax:</div>
                                <div className="order-total">Order total:</div>
                            </div>
                            <div id="summary-body-right">
                                <div>${total.toFixed(2)}</div>
                                <div>${shipping().toFixed(2)}</div>
                                <div>${tax(total)}</div>
                                <div className="order-total">${orderTotal(total)}</div>
                            </div>
                        </div>
                        <div id="place-order">
                            <button onClick={() => alert("Order placed!")}>Place order</button>
                        </div>
                    </div>
                </div>
            </div>

        )    
    }
}

export default Cart
import { Link } from "react-router-dom";

function Cart(props) {
    const {cart, addToCart, removeFromCart} = props;

    if(cart.length === 0) {
        return (
            <div id="cart-container" className="empty-cart">
                <div id="cart-title">Shopping Cart</div>
                <div id="cart-body">Cart is empty! <Link to="/shop">Go shopping!</Link></div>
            </div>
        )
    }   else {
        return (
            <div id="cart-container" className="non-empty-cart">
                <div id="cart-title">Shopping Cart</div>
                {cart.map((item) => (
                    <div className="cart-content" key={item.id}>
                        <img src={item.url} alt={item.name} className="cart-pics"></img>
                        <div className="cart-right">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-quantity">{item.qty}</div>
                            <div>
                                <button className="cart-plus-button" onClick={() => addToCart(item)}>+</button>
                                <button className="cart-minus-button" onClick={() => removeFromCart(item)}>-</button>
                            </div>
                            <div className="cart-item-total">TOTAL: ${(item.qty*item.price).toFixed(2)}</div>
                        </div>
                    </div>
                ))}
            </div>
        )    
    }
}

export default Cart
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header-container">
            <div id="header-title">Odin Grocery Mart</div>
            <div id="header-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <div id="header-cart">
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Header
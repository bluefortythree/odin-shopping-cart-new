import { Link } from "react-router-dom";

function Header(props) {
    const {totalItems} = props;
    return (
        <div id="header-container">
            <div id="header-title">Odin Grocery Mart</div>
            <div id="header-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <div id="header-cart">
                <Link to="/cart"><img id="cart" src="https://images.squarespace-cdn.com/content/v1/636e78e3cd34c14c80c19449/1672690102008-BDCYMNGT947Z3O5OWSXH/shop-bag.png" alt="shopping cart"></img></Link>
                <Link to="/cart" id="total-items-indicator">({totalItems})</Link>
            </div>
        </div>
    )
}

export default Header
import { useState } from 'react';

function Shop(props) {
    
    const {products, addToCart} = props;

    return (

        <div id="shop-container">
            {products.map(item => (
                <div id={"shop-item-" + item.id} key={item.id} className="item">
                    <div className="name">{item.name}</div>
                    <img src={item.url} alt={item.name}></img>
                    <div className="price">{"$"+item.price+" / lb."}</div>
                    <div className="cart">
                        <input id={"item-number-" + item.id} type="number" placeholder="0" min="0" max="100"></input>
                        <button type="submit" data-value={item.name} onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shop
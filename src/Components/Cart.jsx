function Cart() {
    return (
        <div id="cart-container">
            <div id="cart-title">Your cart:</div>
            <div id="cart-summary">
                <div id="sample">
                    <div>item name</div>
                    <div>quantity</div>
                    <input type="number"></input>
                    <button>update</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
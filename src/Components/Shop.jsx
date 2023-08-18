function Shop() {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

    return (
        <div id="shop-container">
            <div id="shop-item-1" className="item">
                <div className="name">Bananas</div>
                <img src="https://static.vecteezy.com/system/resources/previews/008/848/350/original/fresh-yellow-banana-fruit-free-png.png" alt="bananas"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-2" className="item">
                <div className="name">Apples</div>
                <img src="https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png" alt="apples"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-3" className="item">
                <div className="name">Grapes</div>
                <img src="https://binksberryhollow.com/wp-content/uploads/2021/12/purple-grape-1030x1030.png" alt="apples"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-4" className="item">
                <div className="name">Strawberries</div>
                <img src="https://billsberryfarm.com/wp-content/uploads/2020/08/strawberry-2.png" alt="strawberries"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-5" className="item">
                <div className="name">Melons</div>
                <img src="https://magmelon.com/wp-content/uploads/2021/02/cantaloupe-slices.png" alt="melons"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-6" className="item">
                <div className="name">Avocados</div>
                <img src="https://www.lgssales.com/wp-content/uploads/2017/10/tiny_tims_product_new.png" alt="avocados"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-7" className="item">
                <div className="name">Blueberries</div>
                <img src="https://billsberryfarm.com/wp-content/uploads/2020/08/blueberry-2.png" alt="blueberries"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-8" className="item">
                <div className="name">Mandarins</div>
                <img src="https://res.cloudinary.com/hksqkdlah/image/upload/SIL_Citrus_Mandarin-Orange_009_jjrvg8.png" alt="mandarins"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-9" className="item">
                <div className="name">Oranges</div>
                <img src="https://www.pearsonranch.com/wp-content/uploads/Cut-Whole-Oranges-Product-GY1vZ1-1.png" alt="oranges"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-10" className="item">
                <div className="name">Peaches</div>
                <img src="https://billsberryfarm.com/wp-content/uploads/2020/08/peach.png" alt="peaches"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-11" className="item">
                <div className="name">Pineapples</div>
                <img src="https://www.dole.com/-/media/project/dole/produce-images/fruit/pineapple_cut_web.png?rev=7b07a669415341b486c4d98d1d0e3fef&hash=947A67FA0B6FA57B38F0744DE9F2E29F" alt="pineapples"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>
            <div id="shop-item-12" className="item">
                <div className="name">Raspberries</div>
                <img src="https://billsberryfarm.com/wp-content/uploads/2020/08/raspberry.png" alt="raspberries"></img>
                <div className="price">$1.29 / Lb.</div>
                <div className="cart">
                    <input type="number" placeholder="0" min="0"></input>
                    <button>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default Shop
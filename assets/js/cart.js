let label = document.querySelector('#label')
let basket = document.querySelector('#basket')
let basketStorage = JSON.parse(localStorage.getItem('data')) || []
let basketHtml = () => {
    if(basketStorage.length !== 0){
        label.innerHTML = ` <div class="checkoutDetails d-flex ms-auto">
        <p class="me-auto mt-1 totalText">Subtotal</p>
        <p class="ms-auto totalPrice">300$</p>
        </div>
        <a href="./checkout.html" class="d-flex ms-auto toCheckout my-1">Checkout</a>
        `
        return basket.innerHTML = basketStorage.map((x)=>{
            return `    <div class="product d-flex">
            <div class="about">
            <p class="productName mb-2">Name</p>
            <p class="color">Color:</p>
            </div>
            <div class="count d-flex ms-auto me-md-5 pe-md-5"><button class="btn minus">-</button><p class="my-auto">5</p><button class="btn plus">+</button></div>
            <p class="ms-md-5 my-auto ps-5">20$</p>
            <button class="btn remove">X</button>
            </div>
        `
        }).join('')
       
        }
    else{
        basket.innerHTML = `<h3>Shopping Cart</h3><h5 class="py-5">You have nothing in your shopping cart</h5>`
        label.innerHTML = ``
    }
}
basketHtml()
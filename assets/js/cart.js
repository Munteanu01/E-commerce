let label = document.querySelector('#label')
let basket = document.querySelector('#basket')
let basketStorage = JSON.parse(localStorage.getItem('data')) || []
let basketHtml = () => {
    if(basketStorage.length !== 0){
        basket.innerHTML = basketStorage.map((x)=>{
            let {id, item} = x;
            let search = planters.find((y)=>y.id === id) || plants.find((z)=>z.id === id)
            console.log(search.image)
            return `    <div class="product d-flex mb-4">
            <div class="productImage mb-3 me-3"><img class="img-fluid" src="${search.image}" alt=""></div>
            <div class="about">
            <p class="productName mb-2">${search.name}</p>
            <p class="price mb-0">${search.price}$</p>
            </div>
            <div class="count d-flex ms-auto me-md-5 pe-md-5">
            <button class="btn minus">-</button>
            <p class="my-auto">${item}</p><button class="btn plus">+</button></div>
            <p class="ms-md-5 my-auto ps-5">${search.price * item}$</p>
            <button class="btn remove">X</button>
            </div>
        `}).join('')
        label.innerHTML = ` <div class="checkoutDetails d-flex ms-auto">
        <p class="me-auto mt-1 totalText">Subtotal</p>
        <p class="ms-auto totalPrice">300$</p>
        </div>
        <a href="./checkout.html" class="d-flex ms-auto toCheckout my-1">Checkout</a>
        `
        }
    else{
        basket.innerHTML = `<h3>Shopping Cart</h3><h5 class="py-5">You have nothing in your shopping cart</h5>`
        label.innerHTML = ``
    }
}
basketHtml()
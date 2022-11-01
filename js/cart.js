let label = document.querySelector('#label')
let basket = document.querySelector('#basket')
let basketStorage = JSON.parse(localStorage.getItem('data')) || []
let basketHtml = () => {
    if(basketStorage.length !== 0){
        basket.innerHTML = basketStorage.map((x)=>{
            let {id, item} = x;
            let search = planters.find((y)=>y.id === id) || plants.find((z)=>z.id === id)
            return `    <div class="product d-flex mb-4">
            <div class="productImage mb-3 me-3"><img class="img-fluid" src="${search.image}" alt=""></div>
            <div class="about">
                <p class="productName mb-2">${search.name}</p>
                <p class="price mb-0">${search.price}$</p>
            </div>
            <div class="count d-flex ms-auto me-md-5 pe-md-5">
                <button onclick="decrease(${id})" class="btn minus" style="color:${item===1?'#cfd1d0':'grey'};">-</button>
                <p id="${id}" class="my-auto">${item}</p>
                <button onclick="increase(${id})" class="btn plus">+</button>
            </div>
                <p class="ms-md-5 my-auto ps-md-5">${search.price * item}$</p>
                <button onclick="remove(${id})" class="btn remove">X</button>
            </div>
        `}).join('')
        }
    else{
        basket.innerHTML = `<h3>Shopping Cart</h3><h5 class="py-5">You have nothing in your shopping cart</h5>`
        label.innerHTML = ``
    }
}
basketHtml()
let increase = (id) => {
    let selectedItem = id
    let searchBasket = basketStorage.find((x)=> x.id === selectedItem.id)
    if(searchBasket === undefined){
        basketStorage.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else{
        searchBasket.item += 1;
    }
    selectedItem.previousSibling.previousSibling.style.color="grey"
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basketStorage))
}
let decrease = (id) => {
    let selectedItem = id;
    let searchBasket = basketStorage.find((x)=> x.id === selectedItem.id);
    if(searchBasket.item === 2){
        selectedItem.previousSibling.previousSibling.style.color="#cfd1d0"
    }
    if(searchBasket.item === 1)return;
    else{
        searchBasket.item -= 1;
    }
    update(selectedItem.id);
    basketStorage = basketStorage.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basketStorage))
}
let update = (id) => {
    let searchBasket = basketStorage.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = searchBasket.item
    basketHtml()
    total()
}
let remove = (id) => {
    let selectedItem = id
    basketStorage = basketStorage.filter((z)=>z.id !== selectedItem.id)
    basketHtml()
    total()
    localStorage.setItem("data", JSON.stringify(basketStorage))
}
let total = () => {
    if(basketStorage.length !== 0){
        let amount = basketStorage.map((x)=>{
            let {item, id} = x
            let search = planters.find((y)=>y.id === id) || plants.find((z)=>z.id === id)
            return item * search.price;
            
            
        })
        .reduce((x, y)=> x+y, 0);
        label.innerHTML = ` <div class="checkoutDetails d-flex ms-auto">
                            <p class="me-auto mt-1 totalText">Subtotal</p>
                            <p class="ms-auto totalPrice">${amount}$</p>
                            </div>
                            <a href="./checkout.html" class="d-flex ms-auto toCheckout my-1">Checkout</a>
        `
    }else return
}
total()
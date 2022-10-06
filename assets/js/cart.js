const basket = document.querySelector('#basket')
const products = JSON.parse(localStorage.getItem('products'))
if (products) {
    for (let product of products) {
        basket.innerHTML += product.html
    }
}

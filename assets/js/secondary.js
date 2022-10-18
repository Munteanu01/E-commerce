let basketItems = JSON.parse(localStorage.getItem("data")) || []
let calculator = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basketItems.map((x) => x.item).reduce((x, y)=>x+y)
}
calculator()
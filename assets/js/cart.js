let label = document.querySelector('#label')
let basket = document.querySelector('#basket')
let basketStorage = JSON.parse(localStorage.getItem('data')) || []
let basketHtml = () => {
    if(basketStorage.length !== 0){
        console.log(1)
    }
    else{
        basket.innerHTML = ``
        label.innerHTML = `<h2>Empty</h2>`
    }
}
basketHtml()
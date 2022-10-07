//FILTER ON CLICK
document.querySelector('#filter').addEventListener('click', () => {
    document.querySelector('.filterPlus').classList.toggle('d-none');
    document.querySelector('.filterMinus').classList.toggle('d-none');
    document.querySelector('.filterDiv').classList.toggle('d-none');
})
document.querySelector('.firstBtn').addEventListener('click', () => {
    document.querySelector('.firstDiv').classList.toggle('d-none');
})
document.querySelector('.secondBtn').addEventListener('click', () => {
    document.querySelector('.secondDiv').classList.toggle('d-none');
})
document.querySelector('.thirdBtn').addEventListener('click', () => {
    document.querySelector('.thirdDiv').classList.toggle('d-none');
})
document.querySelectorAll('.filters').forEach(filter => {
    filter.addEventListener('click',() => {
        filter.classList.toggle('filtersOnClick')
    })
})

//FILTERS
let items = document.querySelectorAll('.item')

document.querySelector('.filterInStock').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('SOLD OUT')){item.classList.toggle('instockdnone')}
    if(item.classList.contains('outstockdnone')){item.classList.toggle('outstockdnone');document.querySelector('.filterOutOfStock').classList.remove('filtersOnClick')}})})
document.querySelector('.filterOutOfStock').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('+')){item.classList.toggle('outstockdnone')}
    if(item.classList.contains('instockdnone')){item.classList.toggle('instockdnone');document.querySelector('.filterInStock').classList.remove('filtersOnClick')}})})
document.querySelector('.filterCharcoal').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('Cream')){item.classList.toggle('charcoaldnone')}
    if(item.classList.contains('creamdnone')){item.classList.toggle('creamdnone');document.querySelector('.filterCream').classList.remove('filtersOnClick')}})})
document.querySelector('.filterCream').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('Charcoal')){item.classList.toggle('creamdnone')}
    if(item.classList.contains('charcoaldnone')){item.classList.toggle('charcoaldnone');document.querySelector('.filterCharcoal').classList.remove('filtersOnClick')}})})
document.querySelector('.filterMedium').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes(', L')){item.classList.toggle('mdnone')}
    if(item.classList.contains('ldnone')){item.classList.toggle('ldnone');document.querySelector('.filterLarge').classList.remove('filtersOnClick')}})})
document.querySelector('.filterLarge').addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes(', M')){item.classList.toggle('ldnone')}
    if(item.classList.contains('mdnone')){item.classList.toggle('mdnone');document.querySelector('.filterMedium').classList.remove('filtersOnClick')}})})

//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
        console.log(!isVisible)
    })
})

//ADD & REMOVE BASKET
items.forEach(item => {
    if (!item.children[5]) return
    let products = localStorage.getItem('products')
    let product = products ? JSON.parse(products).find(e => e.product === item.children[1].innerText) : null
    let count = product ? product.count : 0

    const showOptions = () => {
        item.children[5].classList.remove('d-none')
        item.children[4].classList.remove('d-none')
        item.children[4].innerText = count}
    if (count > 0) showOptions()

    const getProductHtml = productCount => {
        return `<div>
        <img class="cart-item-image" src="${item.querySelector('img').src}" width="300" >
        <span>${item.querySelector('h5').textContent}</span>
        <span>${item.querySelector('p').textContent}</span>
        <span>${productCount}</span>
        </div>`
    }



    const addToBasket = (item, basket) => {
        const storagedProducts = basket ? JSON.stringify([...basket, item]) : JSON.stringify([item])
        localStorage.setItem('products', storagedProducts)
    }

    item.children[3].addEventListener('click', () => {
        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
        count++;
        if (count > 0) showOptions()
        let productHtml = getProductHtml(count)

        const basketItem = { product: item.children[1].innerText, count, html: productHtml }
        products = products && products.length ? products.filter(e => e.product !== basketItem.product) : []

        addToBasket(basketItem, products)

    })

    item.children[5].addEventListener('click', () => {
        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
        count--
        item.children[4].innerText = count;

        let productHtml = getProductHtml(count)

        if (count < 1) {
            item.children[5].classList.add('d-none')
            item.children[4].classList.add('d-none')
        }

        const basketItem = { product: item.children[1].innerText, count, html: productHtml }
        products = products && products.length ? products.filter(e => e.product !== basketItem.product) : []
        if (basketItem.count > 0) {
            addToBasket(basketItem, products)
        } else {
            localStorage.setItem('products', JSON.stringify(products))
        }
    })

})
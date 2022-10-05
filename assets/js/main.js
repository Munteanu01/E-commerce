//FILTER ON CLICK
const filter = document.querySelector('#filter');
const filterPlus = document.querySelector('.filterPlus');
const filterMinus = document.querySelector('.filterMinus');
const filterDiv = document.querySelector('.filterDiv');
filter.addEventListener('click', () => {
    filterPlus.classList.toggle('d-none');
    filterMinus.classList.toggle('d-none');
    filterDiv.classList.toggle('d-none');
})
const availabilityBtn = document.querySelector('.availabilityBtn');
const availabilityDiv = document.querySelector('.availabilityDiv');
const colorBtn = document.querySelector('.colorBtn');
const colorDiv = document.querySelector('.colorDiv');
const sizeBtn = document.querySelector('.sizeBtn');
const sizeDiv = document.querySelector('.sizeDiv');

availabilityBtn.addEventListener('click', () => {
    availabilityDiv.classList.toggle('d-none');
})
colorBtn.addEventListener('click', () => {
    colorDiv.classList.toggle('d-none');
})
sizeBtn.addEventListener('click', () => {
    sizeDiv.classList.toggle('d-none');
})
const filters = document.querySelectorAll('.filters');
filters.forEach(filter => {
    filter.addEventListener('click',() => {
        filter.classList.toggle('filtersOnClick')
    })
})
//FILTERS
let items = document.querySelectorAll('.item')
const instock = document.querySelector('.filterInStock')
instock.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('SOLD OUT')){item.classList.toggle('instockdnone')}
    if(item.classList.contains('outstockdnone')){item.classList.toggle('outstockdnone');outstock.classList.remove('filtersOnClick')}})})
const outstock = document.querySelector('.filterOutOfStock')
outstock.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('+')){item.classList.toggle('outstockdnone')}
    if(item.classList.contains('instockdnone')){item.classList.toggle('instockdnone');instock.classList.remove('filtersOnClick')}})})
const charcoal = document.querySelector('.filterCharcoal')
charcoal.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('Cream')){item.classList.toggle('charcoaldnone')}
    if(item.classList.contains('creamdnone')){item.classList.toggle('creamdnone');cream.classList.remove('filtersOnClick')}})})
const cream = document.querySelector('.filterCream')
cream.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes('Charcoal')){item.classList.toggle('creamdnone')}
    if(item.classList.contains('charcoaldnone')){item.classList.toggle('charcoaldnone');charcoal.classList.remove('filtersOnClick')}})})
const medium= document.querySelector('.filterMedium')
medium.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes(', L')){item.classList.toggle('mdnone')}
    if(item.classList.contains('ldnone')){item.classList.toggle('ldnone');large.classList.remove('filtersOnClick')}})})
const large = document.querySelector('.filterLarge')
large.addEventListener('click', () =>{items.forEach(item => {
    if(item.textContent.includes(', M')){item.classList.toggle('ldnone')}
    if(item.classList.contains('mdnone')){item.classList.toggle('mdnone');medium.classList.remove('filtersOnClick')}})})



//SEARCH
const searchInput = document.querySelector('.search');
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
        console.log(!isVisible)
    })
})

//ADD & REMOVE BASKET
let productsHtml = [''];
items.forEach(item => {
    let count = 0;
    item.children[3].addEventListener('click', () => {
    count++;
    productsHtml.push(     `<div>
                            <img class="cart-item-image" src="${item.querySelector('img').src}" width="300" >
                            <span>${item.querySelector('h5').textContent}</span>
                            <span>${item.querySelector('p').textContent}</span>
                            <span>${count}</span>
                            </div>`);
    localStorage.setItem('productsHtml', productsHtml);

    localStorage.setItem('counter', count);
    console.log(localStorage.getItem('counter'));

    if(count > 0){
        item.children[5].classList.remove('d-none')
        item.children[4].classList.remove('d-none')
        item.children[4].innerHTML = count;
    }
    })


    item.children[5].addEventListener('click', () => {
    count--
    item.children[4].innerHTML = count;
    localStorage.setItem('counter', count)
    console.log(localStorage.getItem('counter'))
    if(count < 1){
        item.children[5].classList.add('d-none')
        item.children[4].classList.add('d-none')
    }
    })
    
})

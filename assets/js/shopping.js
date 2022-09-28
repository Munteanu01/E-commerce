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
document.querySelector('.filterInStock').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes('SOLD OUT')){item.classList.toggle('instockdnone')}})})
document.querySelector('.filterOutOfStock').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes('+')){item.classList.toggle('outstockdnone')}})})
document.querySelector('.filterCharcoal').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes('Cream')){item.classList.toggle('charcoaldnone')}})})
document.querySelector('.filterCream').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes('Charcoal')){item.classList.toggle('creamdnone')}})})
document.querySelector('.filterMedium').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes(', L')){item.classList.toggle('mdnone')}})})
document.querySelector('.filterLarge').addEventListener('click', () =>{items.forEach(item => {if(item.textContent.includes(', M')){item.classList.toggle('ldnone')}})})

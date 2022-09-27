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

const inStock = document.querySelector('.filterInStock')
inStock.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes('+')){
            item.classList.add('d-block')
            }
        else{
            item.classList.add('d-none')
        }
    })
})
const outStock = document.querySelector('.filterOutOfStock')
outStock.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes('SOLD OUT')){
            item.classList.add('d-block')
        }
        else{
            item.classList.add('d-none')
        }
    })
})
const charcoal = document.querySelector('.filterCharcoal')
charcoal.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes('Charcoal')){
            item.classList.add('d-block')
        }
        else{
            item.classList.add('d-none')
        }
    })
})
const cream = document.querySelector('.filterCream')
cream.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes('Cream')){
            item.classList.add('d-block')
        }
        else{
            item.classList.add('d-none')
        }
    })
})
const medium = document.querySelector('.filterMedium')
medium.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes(', M')){
            item.classList.add('d-block')
        }
        else{
            item.classList.add('d-none')
        }
    })
})
const large = document.querySelector('.filterLarge')
large.addEventListener('click', () =>{
    items.forEach(item => {
        if(item.textContent.includes(', L')){
            item.classList.add('d-block')
        }
        else{
            item.classList.add('d-none')
        }
    })
})

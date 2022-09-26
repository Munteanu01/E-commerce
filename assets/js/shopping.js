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

//ITEMS
const plantersItems = [
    {product:'OBJ 1',
    color:'Cream',
    size:'M',
    price:'15$',
    availability:'Out of stock'},
    {product:'OBJ 1',
    color:'Charcoal',
    size:'L',
    price:'30$',
    availability:'In stock'},
    {product:'OBJ 1',
    color:'Cream',
    size:'L',
    price:'30$',
    availability:'In stock'},
    {product:'OBJ 2',
    color:'Cream',
    size:'L',
    price:'25$',
    availability:'In stock'},
    {product:'OBJ 2',
    color:'Charcoal',
    size:'L',
    price:'25$',
    availability:'In stock'},
    {product:'OBJ 2',
    color:'Cream',
    size:'M',
    price:'15$',
    availability:'Out of stock'}
]

//FILTERS
const filters = document.querySelectorAll('.filters');
filters.forEach(filter => {
    filter.addEventListener('click',() => {
        filter.classList.toggle('filtersOnClick')
    })
})



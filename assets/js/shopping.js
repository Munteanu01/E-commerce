const filter = document.querySelector('#filter');
const filterPlus = document.querySelector('.filterPlus');
const filterMinus = document.querySelector('.filterMinus');
const filterDiv = document.querySelectorAll('.filterDiv');
const item = document.querySelectorAll('.item');
filter.addEventListener('click', () => {
    filterPlus.classList.toggle('d-none')
    filterMinus.classList.toggle('d-none')
    filterDiv.forEach(filterDiv => {
        filterDiv.classList.toggle('d-none');
    })
    item.forEach(item => {
        item.classList.toggle('col-lg-3');
        item.classList.toggle('col-lg-4');
    })
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


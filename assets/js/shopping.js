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

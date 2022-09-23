const filter = document.querySelector('#filter');
const filterDiv = document.querySelectorAll('.filterDiv');
const item = document.querySelectorAll('.item');
filter.addEventListener('click', () => {
    filterDiv.forEach(filterDiv => {
        filterDiv.classList.toggle('d-none');
    })
    item.forEach(item => {
        item.classList.toggle('col-lg-3');
        item.classList.toggle('col-lg-4');
    })
})

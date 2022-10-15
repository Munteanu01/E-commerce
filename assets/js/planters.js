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
    })
})

//BASKET

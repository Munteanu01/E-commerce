//PLANTS
plants = [
    {"name":"Juniperus Bonsai",
    "price":45,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan"},
    {"name":"Phyllanthus Mirabilis",
    "price":20,
    "availability":"in",
    "type":"",
    "collection":"hardy"},
    {"name":"Juniperus Chinensis Shimpaku Kishu",
    "price":60,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan"},
    {"name":"Monstera Deliciosa",
    "price":25,
    "availability":"in",
    "type":"",
    "collection":"beginner"},
    {"name":"Olive Tree",
    "price":35,
    "availability":"in",
    "type":"tree",
    "collection":"japan"},
    {"name":"Everfresh Tree",
    "price":50,
    "availability":"in",
    "type":"tree",
    "collection":"japan"},
    {"name":"Pachira Aquatica",
    "price":15,
    "availability":"out",
    "type":"",
    "collection":"beginner"},
    {"name":"Variegated Juniper Bonsai",
    "price":40,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan"},]

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
document.querySelector('.filterBonsai').addEventListener('click', () =>{items.forEach(item => {
    if(!item.classList.contains('bonsai')){item.classList.toggle('bonsaidnone')}
    if(item.classList.contains('treednone')){item.classList.toggle('treednone');document.querySelector('.filterTree').classList.remove('filtersOnClick')}})})
document.querySelector('.filterTree').addEventListener('click', () =>{items.forEach(item => {
    if(!item.classList.contains('tree')){item.classList.toggle('treednone')}
    if(item.classList.contains('bonsaidnone')){item.classList.toggle('bonsaidnone');document.querySelector('.filterBonsai').classList.remove('filtersOnClick')}})})



document.querySelector('.filterBeginner').addEventListener('click', () =>{items.forEach(item => {
    if(!item.classList.contains('beginner')){item.classList.toggle('beginnerdnone')}})})
document.querySelector('.filterJapan').addEventListener('click', () =>{items.forEach(item => {
    if(!item.classList.contains('japan')){item.classList.toggle('japandnone')}})})
document.querySelector('.filterHardy').addEventListener('click', () =>{items.forEach(item => {
    if(!item.classList.contains('hardy')){item.classList.toggle('hardydnone')}})})

document.querySelectorAll('.filters').forEach(filter => {
filter.addEventListener('click', () => {
    items.forEach(item => {
        if(item.classList.contains('beginnerdnone') && item.classList.contains('japandnone')){
            item.classList.toggle('beginnerdnone');item.classList.toggle('japandnone')
        }
        if(item.classList.contains('japandnone') && item.classList.contains('hardydnone')){
            item.classList.toggle('japandnone');item.classList.toggle('hardydnone')
        }
        if(item.classList.contains('hardydnone') && item.classList.contains('beginnerdnone')){
            item.classList.toggle('hardydnone');item.classList.toggle('beginnerdnone')
        }
    })
})
})

//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})

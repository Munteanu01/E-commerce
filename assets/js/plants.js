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
const items = document.querySelectorAll('.item')
document.querySelectorAll('.filters').forEach(filter => {
    filter.addEventListener('click',() => {
        filter.classList.toggle('filtersOnClick')
        items.forEach(item => {
            item.classList.add('d-none')
        })
    })
})

//PLANTS
const plants = [
    {"name":"Juniperus Bonsai",
    "price":45,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/IMG_8775.jpeg"},
    {"name":"Phyllanthus Mirabilis",
    "price":20,
    "availability":"in",
    "type":"",
    "collection":"hardy",
    "image":"img/plants/IMG_9244.jpeg"},
    {"name":"Juniperus Chinensis Shimpaku Kishu",
    "price":60,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Kishu_Bonsai_02.jpeg"},
    {"name":"Monstera Deliciosa",
    "price":25,
    "availability":"in",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Monstera_ow.jpeg"},
    {"name":"Olive Tree",
    "price":35,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Olive-Tree-L.jpeg"},
    {"name":"Everfresh Tree",
    "price":50,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Everfresh.jpeg"},
    {"name":"Pachira Aquatica",
    "price":15,
    "availability":"out",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Pachira_Moon_p.jpeg"},
    {"name":"Variegated Juniper Bonsai",
    "price":40,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Wind-Swept_t.jpeg"},]

//FILTER
const showcase = document.querySelector('.showcase')
const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')




let plantsInStock = plants.filter(plant => plant.availability === 'in')
filterInStock.addEventListener('click', () => {
    if(filterInStock.classList.contains('filtersOnClick')){
        plantsInStock.forEach(plant => {
        let productHtml = ` <img class="img-fluid" src="img/plants/IMG_8775.jpeg" alt="">
                            <h5>Juniperus Bonsai</h5>
                            <p>45$</p>
                            <button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>`
        let product = document.createElement('div')
        product.className = 'col-lg-4 col-sm-6 mt-0 text-center item'
        product.innerHTML = productHtml
        showcase.append(product)
        })
    }
})


filterOutStock.addEventListener('click', () => {
    if(filterOutStock.classList.contains('filtersOnClick')){
    let plantsOutStock = plants.filter(plant => plant.availability === 'out')

        
    }
})













//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})

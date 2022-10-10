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
const filters = document.querySelectorAll('.filters')
filters.forEach(filter => {
    filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
    !filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
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
let filteredDiv = document.querySelector('.filtered')
let productsDiv = document.querySelector('.productsDiv')

const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')

let plantsInStock = plants.filter(plant => plant.availability === 'in')
let plantsOutStock = plants.filter(plant => plant.availability === 'out')

const filterFunction = function() {
    plants.forEach(plant => {
                        `<div class="col-lg-4 col-sm-6 mt-0 text-center item">
                                    <img class="img-fluid" src="${plant.image}" alt="">
                                    <h5>${plant.name}</h5>
                                    <p>${plant.price}$</p>
                                    <button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
                        </div>`})}
plantsInStock.forEach(plant => {filterFunction();});
plantsOutStock.forEach(plant => {filterFunction();});



filteredArr = [];
filterInStock.addEventListener('click', () => {
        if(filterInStock.checked){
            filteredArr.push(plantsInStock)
        }
        if(!filterInStock.checked){
            filteredArr.pop(plantsInStock)
        }
        console.log(filteredArr)
    })
filterOutStock.addEventListener('click', () => {
        if(filterOutStock.checked){
            filteredArr.push(plantsOutStock)
        }
        if(!filterOutStock.checked){
            filteredArr.pop(plantsOutStock)
        }
        console.log(filteredArr)
    })



/*filterInStock.addEventListener('click', () => {
   
    if(filterInStock.checked && filterOutStock.checked){
        filterInStock.nextSibling.classList.add('filtersOnClick')
        filteredDiv.classList.add('d-none')
        productsDiv.classList.remove('d-none')
    }
    if(filterInStock.checked && !filterOutStock.checked){
        filterInStock.nextSibling.classList.add('filtersOnClick')
        
            
        filteredDiv.innerHTML = filteredArr.join('');
        filteredDiv.classList.remove('d-none')
        productsDiv.classList.add('d-none')
    }
    if(!filterInStock.checked){
        filteredDiv.classList.add('d-none')
        productsDiv.classList.remove('d-none')
        filterInStock.nextSibling.classList.remove('filtersOnClick')
    }
    
})


filterOutStock.addEventListener('click', () => {
    if(filterOutStock.checked && filterInStock.checked ){
        filterOutStock.nextSibling.classList.add('filtersOnClick')
        filteredDiv.classList.add('d-none')
        productsDiv.classList.remove('d-none')
    }
    if(filterOutStock.checked && !filterInStock.checked){
        filterOutStock.nextSibling.classList.add('filtersOnClick')
        plantsOutStock.forEach(plant => {
            let productHtml = `<div class="col-lg-4 col-sm-6 mt-0 text-center item">
                                    <img class="img-fluid" src="${plant.image}" alt="">
                                    <h5>${plant.name}</h5>
                                    <p>${plant.price}$</p>
                                    <button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
                                </div>`;
            filteredArr.push(productHtml)})
        filteredDiv.innerHTML = filteredArr.join('');
        filteredDiv.classList.remove('d-none')
        productsDiv.classList.add('d-none')
    }
    if(!filterOutStock.checked){
        filterOutStock.nextSibling.classList.remove('filtersOnClick')
        filteredDiv.classList.add('d-none')
        productsDiv.classList.remove('d-none')
    }
    
})*/
















//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})

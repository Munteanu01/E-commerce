//FILTER
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
let filteredPlantsDiv = document.querySelector('.filteredPlantsDiv')
let plantsDiv = document.querySelector('.plantsDiv')
const filters = document.querySelectorAll('input[type="checkbox"')
const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')
const filterBonsai = document.querySelector('.filterBonsai')
const filterTree = document.querySelector('.filterTree')
const filterBeginner = document.querySelector('.filterBeginner')
const filterJapan = document.querySelector('.filterJapan')
const filterHardy = document.querySelector('.filterHardy')
const filterOn = () => {
    filteredPlantsDiv.classList.remove('d-none')
    plantsDiv.classList.add('d-none')
}
const filterOff = () => {
    filteredPlantsDiv.classList.add('d-none')
    plantsDiv.classList.remove('d-none')
}
filters.forEach(filter => {
filter.addEventListener('click', () => {
    filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
    !filter.checked ? filter.nextSibling.classList.remove('filtersOnClick') :null
    filterInStock.checked || filterOutStock.checked || filterBonsai.checked || filterTree.checked || filterJapan.checked || filterBeginner.checked || filterHardy.checked ? filterOn() :filterOff();
    
    filteredArr = [];
    for(let plant of plants){
        if(filterInStock.checked && filterOutStock.checked){
            plant.availability ==='in' || plant.availability === 'out' ?  null :null
        }
        else if(filterInStock.checked &&  plant.availability !== 'in'){continue;}
        else if(filterOutStock.checked && plant.availability !== 'out' ){continue;}

        if(filterBonsai.checked && filterTree.checked){
            if(plant.type === 'bonsai' || plant.type === 'tree'){}else{continue;}
        }
        else if(filterBonsai.checked && plant.type !== 'bonsai'){continue;}
        else if(filterTree.checked && plant.type !== 'tree'){continue;}

        if(filterBeginner.checked && !filterJapan.checked && !filterHardy.checked && plant.collection !== 'beginner'){continue;}
        if(filterJapan.checked && !filterHardy.checked && !filterBeginner.checked && plant.collection !== 'japan'){continue;}
        if(filterHardy.checked && !filterBeginner.checked && !filterJapan.checked && plant.collection !== 'hardy'){continue;}

        if(filterBeginner.checked && filterJapan.checked && !filterHardy.checked){
            if(plant.collection === 'beginner' || plant.collection === 'japan'){}else{continue;}}
        if(filterJapan.checked && filterHardy.checked && !filterBeginner.checked){
            if(plant.collection === 'japan' || plant.collection === 'hardy'){}else{continue;}}
        if(filterHardy.checked && filterBeginner.checked && !filterJapan.checked){
            if(plant.collection === 'hardy' || plant.collection === 'beginner'){}else{continue;}}

        plant.availability === 'in' ? plantHtml = `<div class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${plant.image}" alt="">
                                                <h5>${plant.name}</h5>
                                                <p>${plant.price}$</p>
                                                <button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
                                            </div>` :null
        plant.availability === 'out'? plantHtml = `<div class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${plant.image}" alt="">
                                                <h5>${plant.name}</h5>
                                                <p>${plant.price}$</p>
                                                <p class="sold">SOLD OUT</p>
                                            </div>` :null
        filteredArr.push(plantHtml)
    }
    filteredPlantsDiv.innerHTML = filteredArr.join('') 
})
})

//FILTER ON CLICK
const items = document.querySelectorAll('.item')
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

//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})

//BASKET

//MAIN
let basketItems = JSON.parse(localStorage.getItem("data")) || []


let plantsDiv = document.querySelector('.plantsDiv')
let shop = () => {
    return (plantsDiv.innerHTML = plants.map((x)=>{
        let {id, name, price, image} = x
        let search = basketItems.find((x)=>x.id === id) || [];
        if(x.availability === 'in'){
        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <button onclick="increase(${id})" class="btn plus">+</button><p id="${id}" class="counter d-inline-block mt-1 mx-4">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus">-</button>
                                            </div>`} 
        if(x.availability === 'out'){
        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <p class="sold">SOLD OUT</p>
                                            </div>`} 
        
    }).join('') )
}
shop()
let increase = (id) => {
    let selectedItem = id
    let searchBasket = basketItems.find((x)=> x.id === selectedItem.id)
    if(searchBasket === undefined){
        basketItems.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else{
        searchBasket.item += 1;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basketItems))
}
let decrease = (id) => {
    let selectedItem = id;
    let searchBasket = basketItems.find((x)=> x.id === selectedItem.id);
    if(searchBasket.item === 0)return;
    else{
        searchBasket.item -= 1;
    }
    update(selectedItem.id);
    basketItems = basketItems.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basketItems))
}
let update = (id) => {
    let searchBasket = basketItems.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = searchBasket.item
    calculator()
}
let calculator = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basketItems.map((x) => x.item).reduce((x, y)=>x+y, 0)
}
calculator()



//FILTER
let filteredPlantsDiv = document.querySelector('.filteredPlantsDiv')
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


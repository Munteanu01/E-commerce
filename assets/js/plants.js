//SHOP
const plants = [
    {"id":"wqeqwq",
    "name":"Juniperus Bonsai",
    "price":45,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/IMG_8775.jpeg"},
    {"id":"gwegwr",
    "name":"Phyllanthus",
    "price":20,
    "availability":"in",
    "type":"",
    "collection":"hardy",
    "image":"img/plants/IMG_9244.jpeg"},
    {"id":"htees",
    "name":"Chinensis Shimpaku",
    "price":60,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Kishu_Bonsai_02.jpeg"},
    {"id":"saodpas",
    "name":"Monstera Deliciosa",
    "price":25,
    "availability":"in",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Monstera_ow.jpeg"},
    {"id":"vansdg",
    "name":"Olive Tree",
    "price":35,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Olive-Tree-L.jpeg"},
    {"id":"sarsas",
    "name":"Everfresh Tree",
    "price":50,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Everfresh.jpeg"},
    {"id":"vdasga",
    "name":"Pachira Aquatica",
    "price":15,
    "availability":"out",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Pachira_Moon_p.jpeg"},
    {"id":"fbdsfs",
    "name":"Variegated Bonsai",
    "price":40,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Wind-Swept_t.jpeg"},]
let basketItems = JSON.parse(localStorage.getItem("data")) || []
let plantsDiv = document.querySelector('.plantsDiv')
let shopHtml = () => {
    return (plantsDiv.innerHTML = plants.map((x)=>{
        let {id, name, price, image} = x
        let search = basketItems.find((x)=>x.id === id) || [];
        if(x.availability === 'in'){
            if(search.item === undefined){
                return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4 d-none">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1 d-none">-</button>
                                            </div>`
            }
            if(search.item !== undefined){
                return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1">-</button>
                                            </div>`
            }
        } 
        if(x.availability === 'out'){
        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <p class="sold">SOLD OUT</p>
                                            </div>`} 
    }).join('') )
}
shopHtml()

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
filtering = () =>{
    filters.forEach(filter => {
    filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
    !filter.checked ? filter.nextSibling.classList.remove('filtersOnClick') :null
    filterInStock.checked || filterOutStock.checked || filterBonsai.checked || filterTree.checked || filterJapan.checked || filterBeginner.checked || filterHardy.checked ? filterOn() :filterOff();
    
    return (filteredPlantsDiv.innerHTML = plants.map((x) => {
        let {id, name, price, image} = x
        let search = basketItems.find((x)=>x.id === id) || [];

        if(filterInStock.checked && filterOutStock.checked){x.availability ==='in' || x.availability === 'out' ?  null :null}
        else if(filterInStock.checked &&  x.availability !== 'in')return
        else if(filterOutStock.checked && x.availability !== 'out' )return
        if(filterInStock.checked && filterOutStock.checked){x.availability ==='in' || x.availability === 'out' ?  null :null}
        else if(filterInStock.checked &&  x.availability !== 'in')return
        else if(filterOutStock.checked && x.availability !== 'out' )return
        if(filterBonsai.checked && filterTree.checked){
            if(x.type === 'bonsai' || x.type === 'tree'){}else{return}}
        else if(filterBonsai.checked && x.type !== 'bonsai')return
        else if(filterTree.checked && x.type !== 'tree')return
        if(filterBeginner.checked && !filterJapan.checked && !filterHardy.checked && x.collection !== 'beginner')return
        if(filterJapan.checked && !filterHardy.checked && !filterBeginner.checked && x.collection !== 'japan')return
        if(filterHardy.checked && !filterBeginner.checked && !filterJapan.checked && x.collection !== 'hardy')return
        if(filterBeginner.checked && filterJapan.checked && !filterHardy.checked){
            if(x.collection === 'beginner' || x.collection === 'japan'){}else{return}}
        if(filterJapan.checked && filterHardy.checked && !filterBeginner.checked){
            if(x.collection === 'japan' || x.collection === 'hardy'){}else{return}}
        if(filterHardy.checked && filterBeginner.checked && !filterJapan.checked){
            if(x.collection === 'hardy' || x.collection === 'beginner'){}else{return}}
        if(x.availability === 'in'){
            if(search.item === undefined){
                return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4 d-none">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1 d-none">-</button>
                                            </div>`
            }
            if(search.item !== undefined){
                return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1">-</button>
                                            </div>`
            }
        } 
        if(x.availability === 'out'){
        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <p class="sold">SOLD OUT</p>
                                            </div>`} 
    }).join(''))
})
}

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
    document.querySelectorAll('.item').forEach(x => {
        if(!x.children[4])return
        if(x.children[4].innerHTML === '0' ){
            x.children[4].classList.add('d-none');
            x.children[5].classList.add('d-none')
        }
        if(x.children[4].innerHTML !== '0'){
            x.children[4].classList.remove('d-none')
            x.children[5].classList.remove('d-none')
        }
    })
    console.log(searchBasket.item)
}
let calculator = () => {
    let cartIcon = document.getElementById("cartAmount")
    if(basketItems.map((x) => x.item).reduce((x, y)=>x+y, 0) > 0){
    cartIcon.innerHTML = basketItems.map((x) => x.item).reduce((x, y)=>x+y)}
    else{cartIcon.innerHTML = ''}
    
}
calculator()





    

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


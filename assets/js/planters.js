let plantsDiv = document.querySelector('.plantsDiv')
let filteredPlantsDiv = document.querySelector('.filteredPlantsDiv')
const filters = document.querySelectorAll('input[type="checkbox"')
const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')
const filterBonsai = document.querySelector('.filterBonsai')
const filterTree = document.querySelector('.filterTree')
const filterBeginner = document.querySelector('.filterBeginner')
const filterJapan = document.querySelector('.filterJapan')
const filterHardy = document.querySelector('.filterHardy')
const items = document.querySelectorAll('.item')
const filterOn = () => {
    filteredPlantsDiv.classList.remove('d-none')
    plantsDiv.classList.add('d-none')
}
const filterOff = () => {
    filteredPlantsDiv.classList.add('d-none')
    plantsDiv.classList.remove('d-none')
}
const plants = [
    {"id":"JuniperusBonsaiId",
    "name":"Juniperus Bonsai",
    "price":45,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/IMG_8775.jpeg"},
    {"id":"PhyllanthusId",
    "name":"Phyllanthus",
    "price":20,
    "availability":"in",
    "type":"",
    "collection":"hardy",
    "image":"img/plants/IMG_9244.jpeg"},
    {"id":"ChinensisShimpakuId",
    "name":"Chinensis Shimpaku",
    "price":60,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Kishu_Bonsai_02.jpeg"},
    {"id":"MonsteraDeliciosaId",
    "name":"Monstera Deliciosa",
    "price":25,
    "availability":"in",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Monstera_ow.jpeg"},
    {"id":"OliveTreeId",
    "name":"Olive Tree",
    "price":35,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Olive-Tree-L.jpeg"},
    {"id":"EverfreshTreeId",
    "name":"Everfresh Tree",
    "price":50,
    "availability":"in",
    "type":"tree",
    "collection":"japan",
    "image":"img/plants/Everfresh.jpeg"},
    {"id":"PachiraAquaticaId",
    "name":"Pachira Aquatica",
    "price":15,
    "availability":"out",
    "type":"",
    "collection":"beginner",
    "image":"img/plants/Pachira_Moon_p.jpeg"},
    {"id":"VariegatedBonsaiId",
    "name":"Variegated Bonsai",
    "price":40,
    "availability":"in",
    "type":"bonsai",
    "collection":"japan",
    "image":"img/plants/Wind-Swept_t.jpeg"},]

/*<div class="plantersDiv row g-5 p-sm-5 p-3 mx-2 justify-content-center">
<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Offwhite-Straight-Pot_M.jpeg" alt="">
<h5>OBJ 1 - Cream, M</h5>
<p>15$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>

<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/black-Straight-Pot-l.jpeg" alt="">
<h5>OBJ 1 - Charcoal, L</h5>
<p>30$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>

<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Off-White-U-Pot_L.jpeg" alt="">
<h5>OBJ 2 - Cream, L</h5>
<p>25$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>

<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Black-U-Pot-m.jpeg" alt="">
<h5>OBJ 2 - Charcoal, M</h5>
<p>10$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>

<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Offwhite-Straight-Pot_L.jpeg" alt="">
<h5>OBJ 1 - Cream, L</h5>
<p>30$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>

<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Black-U-Pot-L.jpeg" alt="">
<h5>OBJ 2 - Charcoal, L</h5>
<p>25$</p>
<button class="btn pb-1 plus">+</button><p class="counter d-inline-block mt-1 mx-4 d-none"></p><button class="btn pb-1 minus d-none">-</button>
</div>
<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/Off-White-U-Pot_M.jpeg" alt="">
<h5>OBJ 2 - Cream, M</h5>
<p>10$</p>
<p class="sold">SOLD OUT</p>
</div>
<div class="col-lg-4 col-sm-6 mt-0  text-center item">
<img class="img-fluid" src="img/planters/black-Straight-Pot-m.jpeg" alt="">
<h5>OBJ 1 - Charcoal, M</h5>
<p>15$</p>
<p class="sold">SOLD OUT</p>
</div>
</div>

*/


//SHOP
let basketItems = JSON.parse(localStorage.getItem("data")) || []
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

let filtering = () =>{
    filteredArr = [];
    filters.forEach(filter => {
    filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
    !filter.checked ? filter.nextSibling.classList.remove('filtersOnClick') :null
    filterInStock.checked || filterOutStock.checked || filterBonsai.checked || filterTree.checked || filterJapan.checked || filterBeginner.checked || filterHardy.checked ? filterOn() :filterOff();
    
    return (plants.map((x) => {
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
        
        !filteredArr.includes(x.id) ? filteredArr.push(x.id) :null
        
    }))
})
localStorage.setItem('filteredArr', JSON.stringify(filteredArr));filteringHtml()}
let filteringHtml = () => {
filteredArr = JSON.parse(localStorage.getItem('filteredArr'));
filteredHtml = [];
filteredPlantsDiv.innerHTML = filteredArr.map((y) => {
    plants.map((x) => {
        if(x.id === y){
            let {id, name, price, image} = x
            let search = basketItems.find((x)=>x.id === id) || [];
            if(search.item === undefined){
                    filteredHtml.push(`<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                    <img class="img-fluid" src="${image}" alt="">
                                                    <h5>${name}</h5>
                                                    <p>${price}$</p>
                                                    <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4 d-none">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1 d-none">-</button>
                                                </div>`)}
            if(search.item !== undefined){
                    filteredHtml.push(`<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                    <img class="img-fluid" src="${image}" alt="">
                                                    <h5>${name}</h5>
                                                    <p>${price}$</p>
                                                    <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4">${search.item === undefined ? 0 : search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1">-</button>
                                                </div>`) 
                }
            
        }
    })
})
filteredArr.length === 0 ? filteredPlantsDiv.innerHTML = `<h5 class="text-center my-5 py-5">No Results</h5>`: filteredPlantsDiv.innerHTML = filteredHtml.join('')
}

//NUMBERS
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
    filteringHtml()
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
    
}
let calculator = () => {
    let cartIcon = document.getElementById("cartAmount")
    if(basketItems.map((x) => x.item).reduce((x, y)=>x+y, 0) > 0){
    cartIcon.innerHTML = basketItems.map((x) => x.item).reduce((x, y)=>x+y)}
    else{cartIcon.innerHTML = ''}
    
}
calculator()

//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})


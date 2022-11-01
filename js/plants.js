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

//SHOP & FILTER
let basketItems = JSON.parse(localStorage.getItem("data")) || []
let shopHtml = () => {
    filteredArr =[]
    plantsDiv.innerHTML = plants.map((x)=>{
        let {id, name, price, image, availability} = x
        let search = basketItems.find((x)=>x.id === id) || [];
        filters.forEach(filter => {
            filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
            !filter.checked ? filter.nextSibling.classList.remove('filtersOnClick') :null})
        let filtering = () => {
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
        }
        if(filterInStock.checked || filterOutStock.checked || filterBonsai.checked || filterTree.checked || filterJapan.checked || filterBeginner.checked || filterHardy.checked){
            filtering()
            return(plantsDiv.innerHTML = filteredArr.map((y) => {
                if(id === y){
                if(availability ==="in"){
                    if(search.item === undefined){
                        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                        <img class="img-fluid" src="${image}" alt="">
                                                        <h5>${name}</h5>
                                                        <p>${price}$</p>
                                                        <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4 d-none">${0}</p><button onclick="decrease(${id})" class="btn minus mb-1 d-none">-</button>
                                                    </div>`
                    }
                    if(search.item !== undefined){
                        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                        <img class="img-fluid" src="${image}" alt="">
                                                        <h5>${name}</h5>
                                                        <p>${price}$</p>
                                                        <button onclick="increase(${id})" class="btn plus mb-1">+</button><p id="${id}" class="counter d-inline-block my-0 mx-4">${search.item}</p><button onclick="decrease(${id})" class="btn minus mb-1">-</button>
                                                    </div>`
                    }
                }
                if(availability ==="out"){
                    return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
                                                <p class="sold">SOLD OUT</p>
                                            </div>`
                }
            }
            }).join(''))
        }
        else{
            if(availability === 'in'){
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
            if(availability === 'out'){
        return `<div id="product-id-${id}" class="col-lg-4 col-sm-6 mt-0 text-center item">
                                                <img class="img-fluid" src="${image}" alt="">
                                                <h5>${name}</h5>
                                                <p>${price}$</p>
        <p class="sold">SOLD OUT</p></div>`
            }
        }
    }).join('')
    if(plantsDiv.children.length === 0){plantsDiv.innerHTML = `<h5 class="text-center my-5 py-5">No Results</h5>`}
}
shopHtml()

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
    shopHtml()
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
    for(let i = 0; i<plantsDiv.children.length; i++){
        const isVisible = plantsDiv.children[i].children[1].textContent.toLowerCase().includes(value);
        plantsDiv.children[i].classList.toggle('d-none', !isVisible)
    }
})


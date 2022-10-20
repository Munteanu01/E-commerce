let plantersDiv = document.querySelector('.plantersDiv')
let filteredPlantersDiv = document.querySelector('.filteredPlantersDiv')
const filters = document.querySelectorAll('input[type="checkbox"')
const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')
const filterCharcoal = document.querySelector('.filterCharcoal')
const filterCream = document.querySelector('.filterCream')
const filterMedium = document.querySelector('.filterMedium')
const filterLarge = document.querySelector('.filterLarge')
const items = document.querySelectorAll('.item')
const filterOn = () => {
    filteredPlantersDiv.classList.remove('d-none')
    plantersDiv.classList.add('d-none')
}
const filterOff = () => {
    filteredPlantersDiv.classList.add('d-none')
    plantersDiv.classList.remove('d-none')
}

//SHOP
let basketItems = JSON.parse(localStorage.getItem("data")) || []
let shopHtml = () => {
    return (plantersDiv.innerHTML = planters.map((x)=>{
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
    filterInStock.checked || filterOutStock.checked || filterCharcoal.checked || filterCream.checked || filterLarge.checked || filterMedium.checked ? filterOn() :filterOff();
    
    return (planters.map((x) => {
        if(filterInStock.checked && filterOutStock.checked){x.availability ==='in' || x.availability === 'out' ?  null :null}
        else if(filterInStock.checked &&  x.availability !== 'in')return
        else if(filterOutStock.checked && x.availability !== 'out' )return

        if(filterCharcoal.checked && filterCream.checked){
            if(x.color === 'charcoal' || x.color === 'cream'){}else{return}}
        else if(filterCharcoal.checked && x.color !== 'charcoal')return
        else if(filterCream.checked && x.color !== 'cream')return
        
        if(filterMedium.checked && filterLarge.checked){
            if(x.size === 'm' || x.size === 'l'){}else{return}}
        else if(filterMedium.checked && x.size !== 'm')return
        else if(filterLarge.checked && x.size !== 'l')return
       
        
        !filteredArr.includes(x.id) ? filteredArr.push(x.id) :null
        
    }))
})
localStorage.setItem('filteredArr', JSON.stringify(filteredArr));filteringHtml()}
let filteringHtml = () => {
filteredArr = JSON.parse(localStorage.getItem('filteredArr'));
filteredHtml = [];
filteredPlantersDiv.innerHTML = filteredArr.map((y) => {
    planters.map((x) => {
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
filteredArr.length === 0 ? filteredPlantersDiv.innerHTML = `<h5 class="text-center my-5 py-5">No Results</h5>`: filteredPlantersDiv.innerHTML = filteredHtml.join('')
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


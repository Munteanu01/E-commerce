//FILTER
const items = document.querySelectorAll('.item')
const filters = document.querySelectorAll('input[type="checkbox"')
const filterInStock = document.querySelector('.filterInStock')
const filterOutStock = document.querySelector('.filterOutStock')
const filterBonsai = document.querySelector('.filterBonsai')
const filterTree = document.querySelector('.filterTree')
const filterBeginner= document.querySelector('.filterBeginner')
const filterJapan = document.querySelector('.filterJapan')
const filterHardy = document.querySelector('.filterHardy')
items.forEach(item =>{
    filterInStock.addEventListener('click', () => {
        filterInStock.checked && !item.classList.contains('inStock') ? item.classList.add('stockdnone') :null
        !filterInStock.checked && !item.classList.contains('inStock') ? item.classList.remove('stockdnone') :null
        filterInStock.checked && filterOutStock.checked ? item.classList.remove('stockdnone') :null;                                
        if(!filterInStock.checked && filterOutStock.checked){
            !item.classList.contains('outStock') ? item.classList.add('stockdnone') :null}}) 
    filterOutStock.addEventListener('click', () => {
        filterOutStock.checked && !item.classList.contains('outStock') ? item.classList.add('stockdnone') :null
        !filterOutStock.checked && !item.classList.contains('outStock') ? item.classList.remove('stockdnone') :null
        filterOutStock.checked && filterInStock.checked ? item.classList.remove('stockdnone') :null
        if(!filterOutStock.checked && filterInStock.checked){
            !item.classList.contains('inStock') ? item.classList.add('stockdnone') : null}})
    filterBonsai.addEventListener('click', () => {
        filterBonsai.checked && !item.classList.contains('bonsai') ? item.classList.add('typednone') :null
        !filterBonsai.checked && !item.classList.contains('bonsai') ? item.classList.remove('typednone') :null
        if(filterBonsai.checked && filterTree.checked){
            item.classList.contains('bonsai') || item.classList.contains('tree') ? item.classList.remove('typednone') :null}                                   
        if(!filterBonsai.checked && filterTree.checked){
            !item.classList.contains('tree') ? item.classList.add('typednone') :null}}) 
    filterTree.addEventListener('click', () => {
        filterTree.checked && !item.classList.contains('tree') ? item.classList.add('typednone') :null
        !filterTree.checked && !item.classList.contains('tree') ? item.classList.remove('typednone') :null
        if(filterTree.checked && filterBonsai.checked){
            item.classList.contains('tree') || item.classList.contains('bonsai') ? item.classList.remove('typednone') :null}
        if(!filterTree.checked && filterBonsai.checked){
            !item.classList.contains('bonsai') ? item.classList.add('typednone') : null}})
    filterBeginner.addEventListener('click', () => {
        filterBeginner.checked && !item.classList.contains('beginner') ? item.classList.add('d-none') :null
        !filterBeginner.checked && !item.classList.contains('beginner') ? item.classList.remove('d-none') :null
        filterHardy.checked && !filterBeginner.checked && !item.classList.contains('hardy') ? item.classList.add('d-none') :null
        filterJapan.checked && !filterBeginner.checked && !item.classList.contains('japan') ? item.classList.add('d-none') :null
        filterBeginner.checked && filterJapan.checked && filterHardy.checked ? item.classList.remove('d-none') :null
        if(filterJapan.checked && filterBeginner.checked && !filterHardy.checked){
            item.classList.add('d-none')
            item.classList.contains('beginner') || item.classList.contains('japan') ? item.classList.remove('d-none') :null
        }
        if(filterHardy.checked && filterBeginner.checked && !filterJapan.checked){
            item.classList.add('d-none')
            item.classList.contains('hardy') || item.classList.contains('beginner') ? item.classList.remove('d-none') :null
        }
        if(!filterBeginner.checked && filterJapan.checked && filterHardy.checked){
            item.classList.contains('hardy') || item.classList.contains('japan') ? item.classList.remove('d-none') :null}
    })
    filterJapan.addEventListener('click', () => {
        filterJapan.checked && !item.classList.contains('japan') ? item.classList.add('d-none') :null
        !filterJapan.checked && !item.classList.contains('japan') ? item.classList.remove('d-none') :null
        filterHardy.checked && !filterJapan.checked && !item.classList.contains('hardy') ? item.classList.add('d-none') :null
        filterBeginner.checked && !filterJapan.checked && !item.classList.contains('beginner') ? item.classList.add('d-none') :null
        filterBeginner.checked && filterJapan.checked && filterHardy.checked ? item.classList.remove('d-none') :null
        if(filterBeginner.checked && filterJapan.checked && !filterHardy.checked){
            item.classList.add('d-none')
            item.classList.contains('japan') || item.classList.contains('beginner') ? item.classList.remove('d-none') :null
        }
        if(filterHardy.checked && filterJapan.checked && !filterBeginner.checked){
            item.classList.add('d-none')
            item.classList.contains('hardy') || item.classList.contains('japan') ? item.classList.remove('d-none') :null
        }
        if(filterBeginner.checked && !filterJapan.checked && filterHardy.checked){
            item.classList.contains('beginner') || item.classList.contains('hardy') ? item.classList.remove('d-none') :null}
    })
    filterHardy.addEventListener('click', () => {
        filterHardy.checked && !item.classList.contains('hardy') ? item.classList.add('d-none') :null
        !filterHardy.checked && !item.classList.contains('hardy') ? item.classList.remove('d-none') :null
        filterJapan.checked && !filterHardy.checked && !item.classList.contains('japan') ? item.classList.add('d-none') :null
        filterBeginner.checked && !filterHardy.checked && !item.classList.contains('beginner') ? item.classList.add('d-none') :null
        filterBeginner.checked && filterJapan.checked && filterHardy.checked ? item.classList.remove('d-none') :null
        if(filterJapan.checked && filterHardy.checked && !filterBeginner.checked){
            item.classList.add('d-none')
            item.classList.contains('hardy') || item.classList.contains('japan') ? item.classList.remove('d-none') :null
        }
        if(filterBeginner.checked && filterHardy.checked && !filterJapan.checked){
            item.classList.add('d-none')
            item.classList.contains('hardy') || item.classList.contains('beginner') ? item.classList.remove('d-none') :null
        }
        if(filterBeginner.checked && filterJapan.checked && !filterHardy.checked){
            item.classList.contains('beginner') || item.classList.contains('japan') ? item.classList.remove('d-none') :null}
    })
})

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
filters.forEach(filter => {
    filter.addEventListener('click', () => {
    filter.checked ? filter.nextSibling.classList.add('filtersOnClick') :null
    !filter.checked ? filter.nextSibling.classList.remove('filtersOnClick') :null})
})

//SEARCH
document.querySelector('.search').addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    items.forEach(item => {
        const isVisible = item.children[1].textContent.toLowerCase().includes(value)
        item.classList.toggle('d-none', !isVisible)
    })
})

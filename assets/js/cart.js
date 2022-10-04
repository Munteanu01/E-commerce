let productRow = `<div>
<img class="cart-item-image" src="${localStorage.getItem('productImg')}" width="300" >
<span>${localStorage.getItem('productName')}</span>
<span>${localStorage.getItem('productPrice')}</span>
</div>`;
const basket = document.querySelector('#basket')
basket.innerHTML = productRow;
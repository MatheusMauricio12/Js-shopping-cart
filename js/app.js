//console.log(productTotal.innerHTML);
//`${quantity} Earphone - ${productValueList[0] * quantity}`
/*         alert('option 1');
        totalValue += productValueList[0] * quantity.value;
        productTotalValue.innerHTML = `$${totalValue}`;
        let spanList = document.createElement("span");
        spanList.textContent = `${quantity.value} x Earphone - $${productValueList[0] * quantity.value}`
        productList.appendChild(spanList); */

let productsTotalValue = 0;
empt();

function add(){
        let chosenProduct = document.getElementById('product').value;
        let quantity = document.getElementById('quantity').value;
        let productName = chosenProduct.split('-')[0];
        let productValue = chosenProduct.split('$')[1];
        let totalValue = quantity * productValue;
        if(quantity == 0){
            alert("Invalid quantity! It must be at least 1x to get added to the shoping cart!");
        } else{
            let cart = document.getElementById('products-list');
            cart.innerHTML = cart.innerHTML+ `<section class="cart__products__product">
            <span class="blue-text">${quantity} x </span>${productName}<span class="blue-text"> - $${productValue * quantity}</span>
            </section>`;
            productsTotalValue += totalValue;
            let totalField = document.getElementById('total-value');
            totalField.textContent = `$ ${productsTotalValue}`;
            document.getElementById('quantity').value = 0;
        }
    };

function empt(){
    document.getElementById('total-value').innerHTML = ' $ 0'
    document.getElementById('products-list').innerHTML = '';
};



const PRODUCT_LIST = ["MA29", "MP1666", "MP1340", "IPP35", "IPA2208", "IPM20", "IPB10"];
var cartList = [];
var cart = document.getElementsByClassName("cart");

if(!window.sessionStorage.getItem('MA29')){
    for (let i=0; i<PRODUCT_LIST.length; i++){
        window.sessionStorage.setItem(PRODUCT_LIST[i], 'no');
    }
} else {
    for (let i=0; i<PRODUCT_LIST.length; i++){
        if(window.sessionStorage.getItem(PRODUCT_LIST[i]) == 'yes'){
            cartList.push(PRODUCT_LIST[i]);
        }
    }
    updateCart();
}

function addToCart(name){
    window.sessionStorage.setItem(name, 'yes');
    cartList.push(name);
    updateCart();
}

function updateCart(){
    for (let i=0; i<cartList.length; i++){
        var li = document.createElement('li');
        var productName = document.createTextNode(cartList[i]);
        li.appendChild(productName);
        cart[0].appendChild(li);
    }
}

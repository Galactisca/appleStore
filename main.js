const macBox = document.getElementsByClassName("mac-box")[0];
const iphoneBox = document.getElementsByClassName("iphone-box")[0];
const ipadBox = document.getElementsByClassName("ipad-box")[0];
var products;
// read json
const readJson = async () => {
	const response = await fetch('https://61814ec932c9e20017804764.mockapi.io/products');
	const myJson = await response.json(); //extract JSON from the http response
	getJsonData(myJson);
}

function getJsonData(data){
    for (var i=0;i<data.length;i++){
        addProductToWeb(data[i]);
    }
}

function addProductToWeb(object){
    let product = eval(object.des+"Box").getElementsByClassName("product")[0];
    let newElement = document.createElement("div");
    newElement.classList.add("product-item")
    
    newElement.innerHTML=`
        <div class="product-img">  <a href=""><image class="product-img" src="${object.src}"></image></a></div>
        <div class="product-name"><a href="">${object.name}</a></div>
        <div class="produc-price">${formatMoney(object.price) + "đ"}<span class="discount">(- 25%)</span></div>
        <div class="add"><a class="btn-cart" onclick="addToCart("${object.id}")">ADD</a></div>
    `;
    product.appendChild(newElement);
}

function checkLogin(){
    if (!window.localStorage.getItem("UAT")){
        window.location.assign("login.html");
    } else {
        //loadData();
    }
}

function logout(){
    window.localStorage.removeItem("UAT");
    window.location.assign("login.html");
}

// money_format
function formatMoney(x){
    let parts ="";
    let stringx = x.toString();
    let leng = x.toString().length;
    let count;
    if (leng%3==0) count=0;
    else if (leng%3==1) count=2;
    else if (leng%3==2) count=1;
    for (var i = 0; i < leng; i++){
        if (count==3){
            parts+=",";
            count=0;
        }
        parts+=stringx[i];
        count+=1;
    }
    return parts;
}


function addToCart(productId) {
    var cartCount=0;
    if (cartCount == 0) {
        document.querySelector(".empty-item");
      }
      // Set the item to be in cart and lock the add to cart button
    //   var buyBtn = this;
    //   console.log(this, product);

}

function start(){
    
    checkLogin();
    readJson();
    
}

window.onload = start;
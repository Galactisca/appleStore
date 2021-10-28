
const PRODUCT_LIST = ["MA29", "MP1666", "MP1340", "IPP35", "IPA2208", "IPM20", "IPB10"];
var cartMenu = document.querySelector(".cart-menu");
var cartOpen = false;

function initial(){
    if(!window.sessionStorage.getItem('MA29')){
        for (let i=0; i<PRODUCT_LIST.length; i++){
            window.sessionStorage.setItem(PRODUCT_LIST[i], 0);
        }
    } else {
        for (let i=0; i<PRODUCT_LIST.length; i++){
            if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
                updateCart(PRODUCT_LIST[i]);
            }
        }
    }
    // let tr = document.createElement("tr");
    // tr.setAttribute("id", "subtotalRow");

    // let td= document.createElement("td");
    // td.setAttribute("colspan", "4");

    // let subtotal = document.createTextNode("Subtotal");
    // td.appendChild(subtotal);
    // tr.appendChild(td);

    // let td2 = document.createElement("td");
    // td2.setAttribute("id", "subtotal");
    // td2.setAttribute("colspan", "2");
    // let sum = 0;
    // for (let i=0; i<PRODUCT_LIST.length; i++){
    // if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
    //     sum += parseInt(window.sessionStorage.getItem(PRODUCT_LIST[i])) * data[PRODUCT_LIST[i]].price;
    //     }
    // }
    // document.getElementById("cartList").appendChild(tr);
    // td2.appendChild(document.createTextNode(sum));
    // tr.appendChild(td2);
    
    let cartToggle = document.getElementById("cartToggle");
    cartToggle.addEventListener("click", toggleCart);
}

function addToCart(name){
    let num = parseInt(window.sessionStorage.getItem(name));
    window.sessionStorage.setItem(name, (num+1));
    updateCart(name);
    toggleCart();
}

function toggleCart(){
    cartMenu.classList.toggle("open");
    // let subtotal = document.getElementById("subtotal");
    // let sum = 0;
    // for (let i=0; i<PRODUCT_LIST.length; i++){
    // if (window.sessionStorage.getItem(PRODUCT_LIST[i]) != 0){
    //     sum += parseInt(window.sessionStorage.getItem(PRODUCT_LIST[i])) * data[PRODUCT_LIST[i]].price;
    //     }
    // }
    // subtotal.innerHTML = sum;

}

function deleteItem(item){
    window.sessionStorage.setItem(item, 0);
    document.getElementById(item+"tr").remove;
    location.reload();
}

function updateCart(item){
    if (!document.getElementById(item)){
        let tr = document.createElement("tr");
        tr.setAttribute("id", (item+"tr"));

        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", data[item].src);
        img.setAttribute("id", item);
        td1.appendChild(img);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        let name = document.createTextNode(data[item].name);
        td2.appendChild(name);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        let price = document.createTextNode(data[item].price);
        td3.appendChild(price);
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.setAttribute("id", (item + "Amount"));
        let amount = document.createTextNode(window.sessionStorage.getItem(item));
        td4.appendChild(amount);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.setAttribute("id", (item + "total"));
        let total = document.createTextNode(data[item].price * parseInt(window.sessionStorage.getItem(item)));
        td5.appendChild(total);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        let btn = document.createElement("button");
        btn.setAttribute("onclick", "deleteItem('" + item + "')");
        del = document.createTextNode("del");
        btn.appendChild(del);
        td6.appendChild(btn);
        tr.appendChild(td6);

        // document.getElementById("cartList").insertBefore(tr, document.getElementById("subtotalRow"));
    } else {
        document.getElementById(item + "Amount").innerHTML = window.sessionStorage.getItem(item);
        document.getElementById(item + "total").innerHTML = data[item].price * parseInt(window.sessionStorage.getItem(item));
    }
}

// function buy(){
//     alert("Thank you for purchasing at Apple Store");
// }

let data = {
    MA29 :{
        name: "Macbook Air 128GB",
        price: 29000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637407967465471535_mba-2020-gold-1.png", 
        des: "Lorem Ipsum" 
    },

    MP1666 :{
        name: "Macbook Pro 16inch M1 Max",
        price: 60000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/10/19/637702684259566248_macbook-pro-16-2021-bac-1.jpg",
        des:   "Lorem Ipsum"
    },

    MP1340 :{
        name: "Macbook Pro 13inch M1",
        price: 40000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/12/637408000895490753_mbp-2020-m1-gray-2.png",
        des:  "Lorem Ipsum"    
    },

    IPP35 :{
        name: "iPad Pro 12.9 2021 M1 Wi-Fi 5G 128GB",
        price: 35000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/4/21/637546068956139190_ipad-pro-12-9-cell-xam-1.jpg",
        des:   "Lorem Ipsum"   
    },

    IPA2208 :{
        name: "iPad Air 10.9 2020 Wi-Fi + Cellular 64GB",
        price: 20800000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/12/8/637430344008900880_ipad-air-10-9-2020-wi-fi-cellular-xanh-1.png",
        des:   "Lorem Ipsum"   
    },

    IPM20 :{
        name: "iPad Mini 8.3 2021 Wi-Fi 5G 64GB",
        price: 20000000,
        src: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673401506930865_ipad-mini-8-3-2021-wi-fi-5g-xam-1.jpg",
        des:  "Lorem Ipsum"    
    },

    IPB10 :{
        name: "iPad 10.2 2021 Wi-Fi 64GB",
        price: 10000000,
        src:   "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/9/15/637673417056583747_ipad-10-2-2021-wi-fi-bac-1.jpg",
        des:   "Lorem Ipsum"   
    }
    
};

initial();

const container = document.querySelector(".history-container");


const loadHistory = async () => {
    const rawUser = await fetch('https://61814ec932c9e20017804764.mockapi.io/users?token=' + window.localStorage.getItem("UAT"));
    const users = await rawUser.json();
    const rawHistory = await fetch('https://61814ec932c9e20017804764.mockapi.io/history?userId='+users[0].id+'&sortBy=date&order=desc');
    const history = await rawHistory.json();

    for (let i=0; i<history.length; i++){
        loadTransaction(history[i].productId, history[i].quantity, history[i].date);
    }
}

const checkLogin = async() => {
    if (!window.localStorage.getItem("UAT")){
        window.location.assign("login.html");
    } else {
        
    }
}

const loadTransaction = async(productId, quantity, date) => {

    const rawProduct = await fetch("https://61814ec932c9e20017804764.mockapi.io/products?id="+productId);
    const product = await rawProduct.json();

    var div = document.createElement("div");
    div.setAttribute("class", "history-img");
    div.style.backgroundImage = 'url("'+product[0].src+'")';
    container.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("class", "history-name");
    var text = document.createTextNode(product[0].name);
    div.appendChild(text);
    container.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("class", "history-quantity");
    var text = document.createTextNode(quantity);
    div.appendChild(text);
    container.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("class", "history-date");
    var text = document.createTextNode(date);
    div.appendChild(text);
    container.appendChild(div);

}

function start(){
    checkLogin();
    loadHistory();
}

start();
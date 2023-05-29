const selProd   = document.querySelector ("#sel-prod");
const prod1     = document.querySelector ("#prod-1");
const prod2     = document.querySelector ("#prod-2");
const prod3     = document.querySelector ("#prod-3");
const cant1     = document.querySelector ("#cant-1");
const cant2     = document.querySelector ("#cant-2");
const cant3     = document.querySelector ("#cant-3");


const CANT_MAX  = 100;

const productos = ["Producto: 1", "Producto: 2", "Producto: 3"]
const cantidades = [CANT_MAX, CANT_MAX, CANT_MAX]

let index   = 0;

function selecProd() {
    switch (selProd.value) {
        case "1": 
        index = 0;
        break;
        case "2": 
        index = 1;
        break;
        case "3": 
        index = 2;
        break;
    }
}
     
function compraProd() {
    cantidades [index] -= 1;
    switch (index) {
       case 0:
            //prod1.textContent = productos [0];
            cant1.textContent = "Cantidad: "+cantidades [0];
            break;
        case 1:    
            //prod2.textContent = productos [1];
            cant2.textContent = "Cantidad: "+cantidades [1];
            break;
        case 2:
            //prod3.textContent = productos [2];
            cant3.textContent = "Cantidad: "+cantidades [2];
            break;
        }
}

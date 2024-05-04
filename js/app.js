let shopContent = document.getElementById("shopContent"); // div contenido de las cards
let verCarrito = document.getElementById("verCarrito");// div del carrito
let modalContainer = document.getElementById("modal-container")// div del modal

let carrito = [];

//creamos funcion para que aprescan los productos en el DOM

productos.forEach((product) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
                        <img src="${product.img}">
                        <h3> ${product.nombre}</h3>
                        <p class="price"> ${product.precio}</p>
                        
    `;
    shopContent.append(content);

//creamos el boton para los elementos

    let comprar = document.createElement("button");
    comprar.className = "comprar";
    comprar.innerText = "comprar";

    content.append(comprar);

    //le pasamos un evento ("click ") en una funcion a traves del metodo push
     comprar.addEventListener("click", () => {

    //creamos la funcion para que cuadno se repita un  producto cambie la cantidad    
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++
                }
            });
        }else { 
            
            carrito.push({
            id: product.id,
            nombre: product.nombre,
            img: product.img,
            precio:product.precio,
            cantidad: product.cantidad,
        });
    }
       // console.log(carrito);
     });
});













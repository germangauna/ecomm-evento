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
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            img: product.img,
            precio:product.precio,
        });

       // console.log(carrito);

     });

});

// pasamos el evento a verCarrito

verCarrito.addEventListener("click", () =>{
    //console.log("holaaa funciona");

    //inner con un sytrig vacio para que no repita el carrito cuano lo llamamos
    modalContainer.innerHTML = "";

    modalContainer.style.display = "flex";//para que vuelva aprecer el carrito

    // hacemos esete consolog y clickeamos el emoji del carrito que tenemos en el navbar
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
                            <h1 class="modal-header-title">Carrito</h1>
    ` 
    //le pasamos el append
    modalContainer.append(modalHeader);

    //boton del modal header x

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    //pasamos un evento para que cuando apretemose l boton desaparesca
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

//modalHeader es el padre del modalButton
    modalHeader.append(modalButton);

//body del modal, lo recorremos con un forEach

carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
                                <img src="${product.img}">
                                <h3>${product.nombre}</h3>
                                <p>${product.precio}</p>
                                `;

  modalContainer.append(carritoContent);                                 
});

//creamos la funcion donde va a sumar al total

const total = carrito.reduce((acc, el) => acc + el.precio, 0);

//creamos el footer

const totalBuying = document.createElement("div");
totalBuying.className = "total-container";
totalBuying.innerHTML = `total a pagar ${total}`

modalContainer.append(totalBuying);






});












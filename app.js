let shopContent = document.getElementById("shopContent");



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

});















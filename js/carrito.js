
// creamos la nueva funcionque englobe todo

const pintarCarrito = () => { 

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
                                <p>cantidad: ${product.cantidad} </p>
                                <p>total: ${product.cantidad * product.precio} </p>
                                <span class= "delete-product"> ✖️ </span>
                                `;

  modalContainer.append(carritoContent);   
  
  
  //nuevo boton eliminar

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    })
  
  // creacion el boton eliminar, que va a estar dentro de carritoContent
  //boton mal hecho

//   let eliminar = document.createElement("span");
//   eliminar.innerText = "✖️";
//   eliminar.className = "delete-product";
//   carritoContent.append(eliminar);

// eliminar.addEventListener("click", eliminarProducto);

});

//creamos la funcion donde va a sumar al total

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

//creamos el footer

const totalBuying = document.createElement("div");
totalBuying.className = "total-container";
totalBuying.innerHTML = `total a pagar ${total}`

modalContainer.append(totalBuying);

};

verCarrito.addEventListener("click", pintarCarrito);

// funcion del boton eliminar producto

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();

    
};
const carritoCounter = () => {
    cantidadCarrito.style.display ="block";
    
    const carritoLength = carrito.length;
    
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter(); 

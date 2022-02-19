
// Variables
const carrito = document.querySelector('.fa-cart-arrow-down');
const listaArticulos = document.querySelector('#ventanas-voladoras');
const contenedorCarrito = document.querySelector('.fa-cart-arrow-down');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito =new Map();
let hov_carr=document.createElement('div');

hov_carr.setAttribute('style','position: absolute; borde-radius:11px;')
hov_carr.classList.add("bg-dark");

//hov_carr.classList.add("invisible");
console.log(carrito);
// Listeners
cargarEventListeners();
carrito.appendChild(hov_carr);

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaArticulos.addEventListener('click', agregarArticulo);

     // Cuando se elimina un Articulo del carrito
     carrito.addEventListener('click', eliminarArticulo);

     // Al Vaciar el carrito
     //vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
/*
carrito.addEventListener("mouseenter",e=>{
    hov_carr.classList.remove("invisible");
});

carrito.hover(function() {
     hov_carr.classList.remove("invisible");
}, function() {
     hov_carr.classList.add("invisible");
});
*/
// Funciones
// Función que añade el Articulo al carrito
function agregarArticulo(e) {
     e.preventDefault();
     let Articulo = e.target.parentElement;
     // Delegation para agregar-carrito
     if(Articulo.classList.contains('boton')) {
         Articulo=Articulo.parentNode.parentNode.parentNode.parentNode.parentNode;
          // Enviamos el Articulo seleccionado para tomar sus datos
          leerDatosArticulo(Articulo);
     }
}

// Lee los datos del Articulo
function leerDatosArticulo(Articulo) {
    if(articulosCarrito.has("v_"+Articulo.id)){
        articulosCarrito.get("v_"+Articulo.id).cantidad++;

    }else{
        const infoArticulo = {
            imagen: Articulo.querySelector('img').src,
            titulo: Articulo.querySelector('.card-text').textContent,
            precio: Articulo.querySelector('.card-title').textContent,
            id: "v_"+Articulo.id, 
            cantidad: 1
       }
       articulosCarrito.set(infoArticulo.id,infoArticulo);

    }
     
     carritoHTML();
}

// Elimina el Articulo del carrito en el DOM
function eliminarArticulo(e) {
     e.preventDefault();
     console.log("eliminar");
     if(e.target.classList.contains('borrar-Articulo') ) {
          // e.target.parentElement.parentElement.remove();
          const ArticuloId = e.target.getAttribute('data-id')
          e.preventDefault();
          articulosCarrito.delete(e.target.getAttribute('data-id'));
          console.log(articulosCarrito,e.target.getAttribute('data-id'));
         
          carritoHTML();
     }else if(e.target.classList.contains('carrito')){
          console.log('carrito');
          window.location.href = "../pages/carrito-compras.html";
          console.log();
     }else if(e.target.classList.contains('vaciar')){
          articulosCarrito=new Map();
          carritoHTML();
     }
}


// Muestra el Articulo seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(Articulo => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td style="color:white;padding: 10px">  
                    <img src="${Articulo.imagen}" width=40>
               </td>
               <td style="color:white;padding: 10px">${Articulo.titulo.split(" ")[0]}</td>
               <td style="color:white;padding: 10px">$${(parseInt(Articulo.cantidad)*parseFloat(Articulo.precio.split(" ")[2]))}</td>
               <td style="color:white;padding: 10px">${Articulo.cantidad} </td>
               <td style="color:white;padding: 10px">
                    <a href="#" class="borrar-Articulo" data-id="${Articulo.id}">X</a>
               </td>
          `;
          
          hov_carr.appendChild(row);
     });
     const btn1=document.createElement('span');
     const btn2=document.createElement('span');
     btn1.innerHTML=`
     <button class="btn-white text-center m-2 p-2 h6 carrito" style="border-radius:10px">
     comprar</button>`;
     btn2.innerHTML=`<button class="btn-darning text-center m-2 p-2 h6 vaciar" style="border-radius:10px">vaciar</button>`;
     if(articulosCarrito.size>0){
          hov_carr.appendChild(btn1);
          hov_carr.appendChild(btn2);
     }
     


}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     hov_carr.innerHTML='';
     }

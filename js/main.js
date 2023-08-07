/*BUSCADOR */
document.addEventListener ("keyup", e=>{

    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".articulos") .forEach (Bebida =>{
            Bebida.textContent.toLowerCase().includes(e.target.value.toLowerCase())
           ?Bebida.classList.remove("filtro")
           :Bebida.classList.add("filtro")
        }
            )
    }
e.target.matches ("#buscador")

    /*console.log(e.target.value)*/
})
/*Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No se encontraron resultados!',
  })*/

 /* Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })*/
  /*Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 2500
  })*/



console.log (document)
console.log (localStorage)

/*localStorage.setItem ("nombre", "fabricio");
 localStorage.getItem ("nombre")
let nombre = localStorage.getItem ("fabricio")*/

localStorage.removeItem ("nombre");
localStorage.removeItem ("juegos")

//let login = prompt ("usuario");
 //let usuario = "fabricio";
 //let clave = prompt ("contraseña");
 //let contraseña = "12345";

 //Bebidas


    

 
 let Café = {
    Tipo: "Bebida",
    Marca: "Nestcafé",
    Descripcion: "Colombiano",
    Precio: 85,
 }
 let Latte = {
    Tipo: "Bebida",
    Marca: "Dolce Gusto",
    Descripcion: "Leche de vaca",
    Precio: 95,
 }
 let Chocochino = {
    Tipo: "Bebida",
    Marca: "Starbucks",
    Descripcion: "Caramel",
    Precio: 105,
 }
 let Machiatto = {
    Tipo: "Bebida",
    Marca: "Dolce Gusto",
    Descripcion: "Con canela",
    Precio: 115,
 }
 let Té = {
    Tipo: "Bebida",
    Marca: "Twinings",
    Descripcion: "Negro",
    Precio: 80,
 }
 

 

 
 





 /*CARRITO DE COMPRAS */
 



 let articuloscarrito = [];
  const carrito = document.querySelector ("#carrito")
  const carritodecompras = document.querySelector ("#articulos")
  const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
  const contenedorCarrito = document.querySelector('#lista-carrito tbody')

  listaProductos.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
carrito.addEventListener('click', eliminarProducto)

/*FUNCIONES*/
function eliminarProducto(evt){
    evt.preventDefault();
    console.log(evt.target.parentElement)
    if(evt.target.classList.contains('borrar-producto')){
        const producto = evt.target.parentElement.parentElement;
        const productoId = producto.querySelector('a').getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId)

        carritoHTML();
    }
}
function agregarProducto(evt){
    evt.preventDefault()
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement.parentElement
        leerDatosProducto(producto)
    } 
}
 
function carritoHTML(){
    vaciarCarrito()
    articulosCarrito.forEach( producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${producto.imagen}" width="100" />
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(fila)
    })

}
function leerDatosProducto(item){
    const infoProducto = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('h4').textContent,
        precio: item.querySelector('.precio span').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if(articulosCarrito.some( item => item.id === infoProducto.id)){
        const productos = articulosCarrito.map( producto => {
            if(producto.id === infoProducto.id){
                let cantidad = parseInt(producto.cantidad);
                cantidad +=1;
                producto.cantidad = cantidad
                return producto;
            }else {
                return producto;
            }
        })
        articulosCarrito = productos.slice();
    }else {
        articulosCarrito.push(infoProducto)
    }

    carritoHTML()
}

 
  function vaciarCarrito(){
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

 
 //carrito.push (producto)
 //carrito.push (producto3)
 








let Bebida=[
    {Café},{Latte},{Chocochino},{Machiatto},{Té}
]

class Producto {
    constructor (tipo,marca,descripcion,precio)
    {
        this.tipo =  tipo,
        this.marca = marca,
        this.descripcion = descripcion,
        this.precio = precio
    }
}

Array = []

const bebidaCafe = new Producto
("Cafe","Nestcafe","Colombiano",85);
const bebidaLatte = new Producto
("Latte","Dolce Gusto","Leche de vaca",95);
const bebidaChocochino = new Producto
("Chocochino","Starbucks","Caramel",105);
const bebidaMachiatto = new Producto
("Machiatto","Dolce Gusto","Con canela",115);
const bebidaTé = new Producto
("Té","Twinings","Negro",80);

Array.push (bebidaCafe)
Array.push (bebidaLatte)
Array.push (bebidaChocochino)
Array.push (bebidaMachiatto)
Array.push (bebidaTé)

const datosBusqueda = {
    Tipo:  '',
	Marca: '',
	Descripcion:  '',
	Precio: '',
}

function Verbebidas(Bebida){
    Bebida.forEach( Bebida => {


    })
}

function sinresultado(){
  console.log("No hay Resultados")
}

function filtrarTipo(){
  if(datosBusqueda.Tipo){
      return Bebida.tipo == datosBusqueda.Tipo
  }
  return Bebida;
}

function filtrarMarca(){
    if(datosBusqueda.Marca){
        return Bebida.marca<= datosBusqueda.Marca
    }
    return Bebida;
  }

function filtrarDescripcion(){
  if(datosBusqueda.Descripcion){
      return Bebida.descripcion == datosBusqueda.Descripcion
  }
  return Bebida;
}

function filtrarPrecio(){
  if(datosBusqueda.Precio){
      return Bebida.precio >= datosBusqueda.Precio
  }
  return Bebida;
}




function filtrarBebida(){
  let resultado = Bebida.filter(filtrarTipo).filter(filtrarMarca).filter(filtrarDescripcion).filter(filtrarPrecio);
  console.log(resultado.length)
  console.log(resultado)
  if(resultado.length){
      Verbebidas(resultado)
      console.log ("")
  }else {
      sinresultado()
      let resultado = document.querySelector ("#buscar1")
  }
}

/*Bebida.push ("")
/*let Buscador = prompt("¿que desayuno necesitas?")
if (Bebida){filtrarBebida== true,
    console.log (Verbebidas)}
    else{
        alert ("No se encontraron articulos con ese nombre")

        
    }*/


filtrarBebida();

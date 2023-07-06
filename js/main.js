//Comienzo codigo js
//let= variable (se puede reasignar)
//const= constantes (no se puede cambiar)
//"cadena de caracteres"
//if (si)
//else

console.log (document)
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
 

 


/* let Donas= "Donas"
 let Medialunas= "Medialunas"
 let scones= "scones"
 let Tortas= "Tortas"
 
 const producto = {
     nombre: "Café",
     categoria: "bebidas",
     precio: 85
     
 }
 
 const producto2 = {
     nombre: "Latte",
     categoria: "bebidas",
     precio: 90
 }
 const producto3 = {
     nombre: "Chocochino",
     categoria: "bebidas",
     precio: 140
 }
 const producto4 = {
     nombre: "Machiatto",
     categoria: "bebidas",
     precio: 120
 }
 const producto5 = {
     nombre: "Té",
     categoria: "bebidas",
     precio: 90
 }
 
 //Comida
 
 const producto6 = {
     nombre: "Donas",
     categoria: "comida",
     precio: 40
 }
 const producto7={
     nombre:"Medialunas",
     categoria: "comida",
     precio: 30
 }
 const producto8={
     nombre:"scones",
     categoria: "comida",
     precio: 60
 }
 const producto9={
     nombre:"Tortas",
     tipos: "Chocolate",
     categoria: "comida",
     precio: 80
 } 
 

 
 
 //const catalogo = [producto, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

 const combo = [
    {producto: "Café", precio: 85},
    {producto6:"Donas", precio: 40},
 ]
 const combo2 = [
    {producto2:"Latte", precio:90},
    {producto7:"Meidalunas", precio:30},
]
 const combo3 = [
    {producto3:"Chocochino", precio:140},
    {producto8:"scones", precio:60}]
 const combo4 = [
    {producto4:"Machiatto", precio:120},
    {producto9:"Tortas", precio:80},
 ]
 const combo5 = [
    {producto5:"Té", precio:120},
    {producto7:"Medialunas", precio:30}
 ]*/




 
 
 const carrito = []

 function carritodecompras()  {
    return Café
 }
 console.log (carritodecompras)

 
 //carrito.push (producto)
 //carrito.push (producto3)
 
 for(let i=0; i<carrito.length; i+=1){
     console.log(carrito[i].nombre)
     console.log(carrito[i].precio)
 }


/* Buscador */

 /*let marca = prompt("Solicitar Marca")
let year = prompt("Solicitar Tipo")
let minimo = prompt("Solicitar Descripcion")
let maximo = prompt("Solicitar Precio")*/

/*let Bebida= [
   {Tipo: "Café",
    Marca: "Nestcafe",
    Descripcion: "Colombiano",
    Precio: 85,},
   {Tipo: "Latte",
     Marca: "Dolce Gusto",
    Descripcion: "Leche de vaca",
     Precio: 95, },
   { Tipo: "Chocochino",
     Marca: "Starbucks",
     Descripcion: "Caramel",
     Precio: 105,},
   {Tipo: "Machiatto",
    Marca: "Dolce Gusto",
    Descripcion: "Con canela",
    Precio: 115,},
   {Tipo: "Té",
    Marca: "Twinings",
    Descripcion: "Manzanilla",
    Precio: 80,}
]*/
let Bebida = [
    {Café}, {Chocochino}, {Machiatto}, {Té}, {Latte},
];

const datosBusqueda = {
    marca: "",
	Tipo: '',
	Descripcion: "",
	Precio:"",
}

function Verbebidas(Bebida){
    Bebida.forEach( Bebida => {
        console.log(Bebida.marca + " " + Bebida.Descripcion + " " + Bebida.Tipo + " " + Bebida.Precio + "")
    })
}

function sinresultado(){
  console.log("No hay Resultados")
  document.write("<p style='color:red'>No hay Resultados</p>")
}

function filtrarMarca(Bebida){
  if(datosBusqueda.marca){
      return Bebida.Marca == datosBusqueda.marca
  }
  return Bebida;
}

function filtrarTipo(Bebida){
  if(datosBusqueda.Tipo){
      return Bebida.Tipo == datosBusqueda.Tipo
  }
  return Bebida;
}

function filtrarPrecio(Bebida){
  if(datosBusqueda.Precio){
      return Bebida.Precio >= datosBusqueda.Precio
  }
  return Bebida;
}

function filtrarDescripcion(Bebida){
  if(datosBusqueda.Descripcion){
      return Bebida.Descripcion <= datosBusqueda.Descripcion
  }
  return Bebida;
}

function filtrarBebida(){
  let resultado = Bebida.filter(filtrarMarca).filter(filtrarPrecio).filter(filtrarDescripcion).filter(filtrarTipo);
  console.log(resultado.length)
  if(resultado.length){
      Verbebidas(resultado)
  }else {
      sinresultado()
  }
}


filtrarBebida();

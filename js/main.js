//Comienzo codigo js
//let= variable (se puede reasignar)
//const= constantes (no se puede cambiar)
//"cadena de caracteres"
//if (si)
//else


//let login = prompt ("usuario");
 //let usuario = "fabricio";
 //let clave = prompt ("contraseña");
 //let contraseña = "12345";

 const iva= 0.21

 //Bebidas

 

 
 let Café= "Café"
 let Latte= "Latte"
 let Chocochino= "Chocochino"
 let Machiatto= "Machiatto"
 let Té= "Té"

 let Donas= "Donas"
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
 
 
 const catalogo = [producto, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

 const combo = [
    {Café: "Café", precio: 85},
    {Donas:"Donas", precio: 40},
 ]
 const combo2 = []
 const combo3 = []
 const combo4 = []
 const combo5 = []
 //for (let i=0; i<catalogo.length; i+=1) {
   // console.log (catalogo[i].nombre)
 //console.log(catalogo[i].precio)}
 
 
 const carrito = []

 function carritodecompras()  {}
 
 carrito.push (producto)
 carrito.push (producto3)
 
 for(let i=0; i<carrito.length; i+=1){
     console.log(carrito[i].nombre)
     console.log(carrito[i].precio)
 }
 
 
 
 
 
 
 /* const metodoPago = prompt("Cargar metodo de pago");
 
 switch(metodoPago.toLowerCase()) {
     case "efectivo":
         console.log("efectivo");
         break;
     case "tarjeta":
         console.log("Pagas con tarjeta");
         break;
     case "mp": 
         console.log("Pagaste con Mercado Pago");
         break;
     default:
         console.log("No seleccionaste un metodo de pago valido");
 }*/
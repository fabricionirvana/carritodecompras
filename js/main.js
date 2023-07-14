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

    console.log(e.target.value)
})




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
 

 
/* Descartados*/

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




 
 
 const carrito = [
    {Café},{Latte},{Chocochino},{Machiatto},{Té}
 ]

 function carritodecompras()  {
    let carritodecompras= carrito==Bebida
 }



 
 //carrito.push (producto)
 //carrito.push (producto3)
 
 /*for(let i=0; i<carrito.length; i+=1){
     console.log(carrito[i].nombre)
     console.log(carrito[i].precio)
 }*/


/* Buscador */

 /*let marca = prompt ("Solicitar Marca")
let Tipo = prompt("Que tipo de desayuno quieres?")
/*let Descripcion = prompt("Solicitar Descripcion")
let Precio = prompt("Solicitar Precio")*/




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

let Bebida=[
    {Café},{Latte},{Chocochino},{Machiatto},{Té}
]

const datosBusqueda = {
    Café:  '',
	Chocochino: '',
	Machiatto:  '',
	Té: '',
    Latte: '',
}

function Verbebidas(Bebida){
    Bebida.forEach( Bebida => {


    })
}

function sinresultado(){
  console.log("No hay Resultados")
}

function filtrarCafé(){
  if(datosBusqueda.Café){
      return Bebida.Café == datosBusqueda.Café
  }
  return Bebida;
}

function filtrarLatte(){
    if(datosBusqueda.Latte){
        return Bebida.Latte <= datosBusqueda.Latte
    }
    return Bebida;
  }

function filtrarChocochino(){
  if(datosBusqueda.Chocochino){
      return Bebida.Chocochino == datosBusqueda.Chocochino
  }
  return Bebida;
}

function filtrarMachiatto(){
  if(datosBusqueda.Machiatto){
      return Bebida.Machiatto >= datosBusqueda.Machiatto
  }
  return Bebida;
}

function filtrarTé(){
  if(datosBusqueda.Té){
      return Bebida.Té <= datosBusqueda.Té
  }
  return Bebida;
}


function filtrarBebida(){
  let resultado = Bebida.filter(filtrarCafé).filter(filtrarChocochino).filter(filtrarMachiatto).filter(filtrarTé).filter(filtrarLatte);
  /*console.log(resultado.length)*/
  console.log(resultado)
  if(resultado.length){
      Verbebidas(resultado)
      console.log ()
  }else {
      sinresultado()
      let resultado = document.querySelector ("#buscar1")
  }
}

Bebida.push ("")
/*let Buscador = prompt("¿que desayuno necesitas?")
if (Bebida){filtrarBebida== true,
    console.log (Verbebidas)}
    else{
        alert ("No se encontraron articulos con ese nombre")

        
    }*/


filtrarBebida();

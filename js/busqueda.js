let marca = prompt("Solicitar Marca")
let year = prompt("Solicitar Tipo")
let minimo = prompt("Solicitar Descripcion")
let maximo = prompt("Solicitar Precio")

const Bebida= [
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
]

const datosBusqueda = {
    marca: "",
	Tipo: '',
	Descripcion: "",
	Precio:"",
}

function Verbebidas(Bebida){
    Bebida.forEach( Bebida => {
        console.log(Bebida.marca + " " + Bebida.Descripcion + " " + Bebida.Tipo + " " + Bebida.Precio)
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
      mostrarBebidas(resultado)
  }else {
      sinresultado()
  }
}


filtrarBebida();

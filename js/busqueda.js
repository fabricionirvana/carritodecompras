const Bebida= [
   {Tipo: "Café",
    Marca: "Nestcafé",
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


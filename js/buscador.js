
  


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
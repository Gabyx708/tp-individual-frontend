import Comanda from '../Services/getComanda.js'
import comandaCard from '../components/cardComanda.js'

let btnBusqueda = document.getElementById("boton-buscar");

let section = document.getElementById("seccion-consultas");
const inputCodigo = document.getElementById("busqueda-codigo");


btnBusqueda.addEventListener('click', async function() {
    let id = inputCodigo.value;
    let comanda = null;

    try{
       comanda = await Comanda.Get(id);
       console.log(comanda)
    }catch(error){
      alert("algo salio terriblemente mal , intenta de nuevo");
    }

    if(comanda.length == 0){
      alert("Ups! parece que no encontre ningun pedido con ese codigo!")
      location.reload();
    }
    
    document.getElementsByClassName("input-group")[0].style.display = 'none';
    document.getElementById("label-pedido").style.display = 'none';
    section.style.width = "100%";
    
    const tarjeta = section.getElementsByClassName("tarjetaComanda");

  
    if (tarjeta.length > 0) {
        tarjeta[0].innerHTML = comandaCard(comanda);
      } else {
        const newDiv = document.createElement('div');
        newDiv.className = "tarjetaComanda";
        newDiv.innerHTML = comandaCard(comanda);
        section.appendChild(newDiv);
      }
  });
  

import Comanda from './Services/getComanda.js'
import comandaCard from './components/cardComanda.js'

let btnBusqueda = document.getElementsByClassName("paloma")[0];
let pedido = ""
let section = document.getElementsByTagName('section')[0];
const input = document.getElementById("busqueda");


btnBusqueda.addEventListener('click', async function() {
    let id = input.value;
    let comanda = await Comanda.Get(id);
    document.getElementsByClassName("input-group")[0].style.display = 'none';
    
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
  

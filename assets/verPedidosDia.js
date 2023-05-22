import FechaComanda from "../Services/getComandaByFecha.js"
import comandaCard from '../components/cardComanda.js'

const cargarPedidosDia = async  function (fechaDeHoy){

    let pedidos = await FechaComanda.GetByFecha(fechaDeHoy);
    let section = document.getElementById('comandas');

    if(pedidos == null || pedidos.length === 0){
        section.innerHTML  += `<h2 class="message_pedidos">Ups! parece que aun no hay pedidos hoy :(</h2>`;
    }

        pedidos.forEach(pedido => {
            section.innerHTML +=  comandaCard(pedido);
        });
    

}

let fecha = new Date();


let fechaDeHoy = `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`;

window.onload = cargarPedidosDia(fechaDeHoy);
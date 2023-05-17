import FechaComanda from "../Services/getComandaByFecha.js"
import comandaCard from '../components/cardComanda.js'

const cargarPedidosDia = async  function (fechaDeHoy){

    let pedidos = await FechaComanda.GetByFecha(fechaDeHoy);
    let section = document.getElementById('comandas');

    pedidos.forEach(pedido => {
        section.innerHTML +=  comandaCard(pedido);
    }); 

}

let fecha = new Date();


let fechaDeHoy = `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`;

window.onload = cargarPedidosDia(fechaDeHoy);
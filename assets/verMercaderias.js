import Mercaderia from '../Services/getMercaderias.js'
import cardMercaderia from '../components/cardMercaderia.js'
import mercaderiaCard from '../components/cardMercaderia.js';
import Pedido from '../Services/postComanda.js';

let allMercaderias = await Mercaderia.Get();

let section = document.getElementById("menu");

allMercaderias.forEach(mercaderia => {
    section.innerHTML += mercaderiaCard(mercaderia);
});


const btnPedir = document.querySelectorAll(".btn-mercaderia");
const mercaderiaInfo = document.querySelectorAll('.mercaderia-item');
const btnConfirmarPedido = document.getElementById('btn-pedido');

//mercaderias del pedido
let pedidoMercaderia = [];

btnPedir.forEach(button => {
    button.addEventListener("click", e => {
      const mercaderiaId = button.getAttribute("mercaderia-id")
      pedidoMercaderia.push(mercaderiaId);
      btnConfirmarPedido.innerHTML = `Confirmar Pedido ${pedidoMercaderia.length}`;

      // Resto de tu código para ese botón específico
      console.log(pedidoMercaderia);
    });
  });

  btnConfirmarPedido.addEventListener('click',e =>{
    
    if(pedidoMercaderia.length == 0){alert("primero tienes que pedir algo")}

    Pedido.Pedir(pedidoMercaderia,1);
    alert("pedido realizado!");
    pedidoMercaderia = []
    location.reload();
})



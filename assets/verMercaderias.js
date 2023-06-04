import Mercaderia from '../Services/getMercaderias.js'
import cardMercaderia from '../components/cardMercaderia.js'
import mercaderiaCard from '../components/cardMercaderia.js';
import Pedido from '../Services/postComanda.js';

let allMercaderias = await Mercaderia.Get();

let section = document.getElementById("menu");

//mercaderias del pedido
let pedidoMercaderia = [];

allMercaderias.forEach(mercaderia => {
    section.innerHTML += mercaderiaCard(mercaderia);
});

var tipos = document.querySelectorAll('.tipo');

tipos.forEach(button => {
  button.addEventListener('click',async e => {
    e.preventDefault();
    section.innerHTML = '';
    allMercaderias = [];
    allMercaderias = await Mercaderia.Get(button.getAttribute("value"));

    allMercaderias.forEach(mercaderia => {
      section.innerHTML += mercaderiaCard(mercaderia);
  });

  });
})


//asignar evento click a todos los botones
section.addEventListener('click', async (e) =>{
  if (e.target.classList.contains('btn-mercaderia')) {

    const mercaderiaId = e.target.getAttribute('mercaderia-id');
    pedidoMercaderia.push(mercaderiaId);
    btnConfirmarPedido.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>Pedido ${pedidoMercaderia.length}`;
    console.log(pedidoMercaderia);
  }
})


//const btnPedir = document.querySelectorAll(".btn-mercaderia");
const mercaderiaInfo = document.querySelectorAll('.mercaderia-item');
const btnConfirmarPedido = document.getElementById('btn-pedido');

btnConfirmarPedido.addEventListener('click',async e =>{
  
  if(pedidoMercaderia.length == 0)
  {
    alert("primero tienes que pedir algo")
  }else{
    const respuesta = await Pedido.Pedir(pedidoMercaderia,1);
    alert("pedido realizado! codigo: "+respuesta.id);
    pedidoMercaderia = []
    location.reload();
  }

})



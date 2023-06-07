import cardPedido from '../components/cardPedido.js';
import Mercaderia from '../Services/getMercaderias.js'
import MercaderiaDetalle from '../components/cardMercaderiaDetalle.js';
import mercaderiaCard from '../components/cardMercaderia.js';
import Pedido from '../Services/postComanda.js';
import mercaderiaDetalle from '../components/cardMercaderiaDetalle.js';


let allMercaderias = await Mercaderia.Get();

let section = document.getElementById("menu");
const mercaderiaInfo = document.querySelectorAll('.mercaderia-item');
const btnConfirmarPedido = document.getElementById('btn-pedido');
const btnsMercaderia = document.getElementsByClassName('btn-detalle');
const modal = document.getElementById("modal-container");
const modalMercaderia = document.getElementById("modal-mercaderia");

//mercaderias del pedido
let pedidoMercaderia = [];

//pintar las tarjetas en pantalla
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


section.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-detalle")) {
    const mercaderiaId = e.target.getAttribute("mercaderia-id");
    const mercaderiaMostrar = await Mercaderia.ById(mercaderiaId);
    modal.style.display = "flex";
    modalMercaderia.innerHTML = mercaderiaDetalle(mercaderiaMostrar);
    console.log(mercaderiaMostrar);

    const btnClose = document.getElementById("close");

    btnClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});


btnConfirmarPedido.addEventListener('click',async e =>{
  
  let modalPedidoContainer = document.getElementById("modal-container-pedido");
  let modalPedido = document.getElementById("modal-pedido");
  let closePedido = document.getElementById("close-pedido");
  let cancelPedido = document.getElementById("cancel-pedido");
  let okPedido = document.getElementById("ok-pedido");
  let formaEntrega = document.getElementById("forma-entrega");

  if(pedidoMercaderia.length == 0)
  {
    alert("primero tienes que pedir algo")
  }else{

    //hacer visible
    modalPedidoContainer.style.display = "flex";
;
    const divPedido = document.createElement('div');
    divPedido.innerHTML = await cardPedido(pedidoMercaderia);
    const pintar = divPedido.firstElementChild;
    modalPedido.appendChild(pintar);
    

    cancelPedido.addEventListener("click",()=>{
        
      var opcion = confirm("estas a punto de cancelar tu pedido! estas seguro?");

      if(opcion === true){
          location.reload();
      }

    });

    closePedido.addEventListener("click",()=>{
      modalPedido.removeChild(pintar);
      modalPedidoContainer.style.display = "none";
    })

    okPedido.addEventListener("click",async ()=>{

        let entregaElegida = formaEntrega.value;
        const respuesta = await Pedido.Pedir(pedidoMercaderia,entregaElegida);
        alert("pedido realizado! codigo: "+respuesta.id);
        location.reload();
    })
   
  }

})



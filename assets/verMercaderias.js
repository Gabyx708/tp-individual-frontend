import cardPedido from '../components/cardPedido.js';
import Mercaderia from '../Services/getMercaderias.js'
import MercaderiaDetalle from '../components/cardMercaderiaDetalle.js';
import mercaderiaCard from '../components/cardMercaderia.js';
import Pedido from '../Services/postComanda.js';
import mercaderiaDetalle from '../components/cardMercaderiaDetalle.js';
import MensajeNotFound from '../components/notFound.js';


let allMercaderias = await Mercaderia.Get();

let section = document.getElementById("menu");
const btnConfirmarPedido = document.getElementById('btn-pedido');
const btnPedidoAnimar = document.getElementById("btn-pedido-animar");
const modal = document.getElementById("modal-container");
const modalMercaderia = document.getElementById("modal-mercaderia");

//variables para filtrado
const inputBusqueda = document.getElementById("input-busqueda");
let ordenAsc = document.getElementById("orden-asc");
let ordenDesc = document.getElementById("orden-desc");
let tipo;
let nombre;
let orden;


//mercaderias del pedido
let pedidoMercaderia = [];

//pintar todas las tarjetas de mercaderias en pantalla
allMercaderias.forEach(mercaderia => {
    section.innerHTML += mercaderiaCard(mercaderia);
});

var tipos = document.querySelectorAll('.tipo');

tipos.forEach(button => {
  button.addEventListener('click',async e => {
    e.preventDefault();
    section.innerHTML = '';
    allMercaderias = [];

    tipos.forEach(btn => {
      btn.classList.remove('activo');
    });

    button.classList.add("activo");
    tipo = button.getAttribute("value");
  
  allMercaderias = await Mercaderia.getMercaderiaFiltrada(orden,tipo,nombre)

  if(allMercaderias == ""){
    section.innerHTML += MensajeNotFound();
}

     allMercaderias.forEach(mercaderia => {
      section.innerHTML += mercaderiaCard(mercaderia);
   });

  });
})



//asignar evento click a todos los botones de agregar
section.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-mercaderia')) {

    let audio = document.getElementById('audioMoney');

    //funciona sonido
    function playSonido() {
      audio.currentTime = 0;
      audio.volume = 0.2;
      audio.play();
    }

    btnPedidoAnimar.classList.add('animate__animated', 'animate__bounce');
    playSonido();
    setTimeout(function () {
      btnPedidoAnimar.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);

    const mercaderiaId = e.target.getAttribute('mercaderia-id');
    pedidoMercaderia.push(mercaderiaId);
    btnConfirmarPedido.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>(${pedidoMercaderia.length})`;
    console.log(pedidoMercaderia);
  }
})



//logica modal mercaderia
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




//logica busqueda nombre
inputBusqueda.addEventListener('input',async()=>{

  nombre = inputBusqueda.value.trim();   
  section.innerHTML = "";
  allMercaderias = await Mercaderia.getMercaderiaFiltrada(orden,tipo,nombre);
  
  if(allMercaderias == ""){
    section.innerHTML += MensajeNotFound();
  }

  allMercaderias.forEach(mercaderia => {
    section.innerHTML += mercaderiaCard(mercaderia);
});

});

//logica de orden



ordenAsc.addEventListener('click',async () => {

    let orden = "asc";
    allMercaderias = await Mercaderia.getMercaderiaFiltrada(orden,tipo,nombre);

    if(allMercaderias == ""){
      section.innerHTML += MensajeNotFound();
  }

    section.innerHTML = "";
    allMercaderias.forEach(mercaderia => {
     section.innerHTML += mercaderiaCard(mercaderia);
  });



  if (!ordenAsc.classList.contains('activo')) {
    ordenAsc.classList.add('activo');
    ordenDesc.classList.remove('activo');
  }
});

ordenDesc.addEventListener('click',async () => {

    let orden = "desc";
    section.innerHTML = "";
    allMercaderias = await Mercaderia.getMercaderiaFiltrada(orden,tipo,nombre);

    if(allMercaderias == ""){
      section.innerHTML += MensajeNotFound();
  }


    allMercaderias.forEach(mercaderia => {
     section.innerHTML += mercaderiaCard(mercaderia);
  });

  if (!ordenDesc.classList.contains('activo')) {
    ordenDesc.classList.add('activo');
    ordenAsc.classList.remove('activo');
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
    Swal.fire({
      title: 'Ups!',
      text: 'debes agregar algo al carrito primero',
      icon: 'warning',
      iconColor: "#FFBC0D",
      confirmButtonColor: "#FFBC0D",
      confirmButtonText: 'entendido'
    })
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
        let identificador = await respuesta.id;
        modalPedidoContainer.style.display = "none";
        const Toast = await Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'pedido realizado exitosamente'
        })

        setTimeout(() => {
          location.reload();
        }, 3000);
    })
   
  }

})



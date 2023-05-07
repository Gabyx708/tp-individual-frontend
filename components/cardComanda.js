export default function comandaCard(comandaData){

  let listaMercaderias = comandaData.mercaderias;
  let imprimirMercaderias = listaMercaderias.map(m => `<tr><th scope="row">${m.nombre}</th><td>$ ${m.precio}</td><td><img class="imagenComida" src=${m.imagen}></td></tr>`).join('');



    return (
        '<div class="card tarjetaComanda" style="width: 1fr">' +
        '<div class="card-body">' +
          '<h5 class="card-text"> Pedido N°' + comandaData.id + '</h5>' +
          '<p class="card-text">Forma Entrega: ' + comandaData.formaEntrega.descripcion+'</p>' +
          '<p class="card-text">fecha: ' + comandaData.fecha + '</p>' +
          '<table class="table table-bordered">'+
          '<thead><tr><th scope="col">Descripcion</th><th scope="col">precio</th></tr></thead>'+
          '<tbody class="table-group-divider">'+imprimirMercaderias+
          '</tbody></table>'+
          '<span class="badge text-bg-success">TOTAL $'+comandaData.total+'</span><button class="btn btn-primary" onClick="history.go(0)">consultar otro pedido</button>'+
        '</div>' +
      '</div>'
      )
}
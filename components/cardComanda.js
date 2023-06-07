export default function comandaCard(comandaData){

  let mercaderias = comandaData.mercaderias;
  let imprimirMercaderias = mercaderias.map(m => `<tr><th scope="row">${m.nombre}</th><td>$ ${m.precio}</td><td><img class="imagenComida" src=${m.imagen}></td></tr>`).join('');



    return (
        '<div class="card tarjetaComanda">' +
        '<div class="card-body">' +
        '<span class="label-comanda">codigo: '+comandaData.id+'</span>'+
          '<span class="label-comanda">fecha: '+comandaData.fecha+'</span>'+
          '<span class="label-comanda">entrega: '+comandaData.formaEntrega.descripcion+'</span>'+
          '<table class="table table-bordered">'+
          '<thead><tr><th scope="col">Detalle</th><th scope="col">precio</th><th scope="col">imagen</th></tr></thead>'+
          '<tbody class="table-group-divider">'+imprimirMercaderias+
          '</tbody></table>'+
          '<span class="badge text-bg-success">TOTAL $'+comandaData.total+'</span>'+
        '</div>' +
      '</div>'
      )
}
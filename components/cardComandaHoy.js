export default function comandaHoy(comandaData){

    let mercaderias = comandaData.mercaderias;
    let imprimirMercaderias = mercaderias.map(m => `<tr><th scope="row">${m.nombre}</th><td>$ ${m.precio}</td><td><img class="imagenComida" src=${m.imagen}></td></tr>`).join('');
  
  
  
      return (
          '<div class="card tarjetaComanda">' +
          '<div class="card-body">' +
            '<table class="table table-bordered">'+
            '<span class="label-comanda">codigo: '+comandaData.id+'</span>'+
            '<span class="label-comanda">fecha: '+comandaData.fecha+'</span>'+
            '<thead><tr><th scope="col">Descripcion</th><th scope="col">precio</th></tr></thead>'+
            '<tbody class="table-group-divider">'+imprimirMercaderias+
            '</tbody></table>'+
            '<span class="badge text-bg-warning">total $'+comandaData.total+'</span>'+
          '</div>' +
        '</div>'
        )
  }
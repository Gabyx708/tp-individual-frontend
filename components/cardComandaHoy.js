export default function comandaHoy(comandaData){

    let mercaderias = comandaData.mercaderias;
    let imprimirMercaderias = mercaderias.map(m => `<tr><th scope="row" class="detalle-comida">${m.nombre}</th><td><img class="imagenComida" src=${m.imagen}></td><td class="precio-tabla">$ ${m.precio}</td></tr>`).join('');
  
  
  
      return (
          '<div class="card tarjetaComanda">' +
          '<div class="card-body">' +
          '<span class="label-comanda">codigo: '+comandaData.id+'</span>'+
            '<span class="label-comanda">fecha: '+comandaData.fecha+'</span>'+
            '<span class="label-comanda">entrega: '+comandaData.formaEntrega.descripcion+'</span>'+
            '<table class="table table-bordered">'+
            '<thead><tr><th scope="col">Detalle</th><th scope="col">imagen</th><th scope="col">precio</th></tr></thead>'+
            '<tbody class="table-group-divider">'+imprimirMercaderias+
            '</tbody></table>'+
            '<span class="total-comanda"><p class="text-white">total a pagar:<p></p><p>$'+comandaData.total+'</p></span>'+
          '</div>' +
        '</div>'
        )
  }


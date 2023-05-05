export default function comandaCard(comandaData){
    return (
        '<div class="card tarjetaComanda" style="width: 1fr">' +
        '<div class="card-body">' +
          '<h5 class="card-text">' + comandaData.id + '</h5>' +
          '<p class="card-text">Forma Entrega: ' + comandaData.formaEntrega.descripcion+'</p>' +
          '<p class="card-text">fecha: ' + comandaData.fecha + '</p>' +
          '<p class="card-text">$' + comandaData.total + '</p>' +
        '</div>' +
      '</div>'
      )
}
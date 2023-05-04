export default function mercaderiaCard(mercaderiaData){
    return (
      '<div class="card" style="width: 1fr">' +
      '<img src="' + mercaderiaData.imagen + '" class="card-img-top" alt="...">' +
      '<div class="card-body">' +
        '<h5 class="card-text">' + mercaderiaData.nombre + '</h5>' +
        '<p class="card-text">$' + mercaderiaData.precio + '</p>' +
      '</div>' +
    '</div>'
    )
  }
  
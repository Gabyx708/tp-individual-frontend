export default function mercaderiaDetalle(mercaderia){

    return  `
    <div class="mercaderia-detalle">
    <div class="contenedor-img-mercaderia">
      <img src="${mercaderia.imagen}">
      </div>
      <div class="card-body">
        <h5 class="card-title">${mercaderia.nombre}</h5>
        <p class="card-text">${mercaderia.tipo.descripcion}</p>
        <label>INGREDIENTES:</label>
        <p class="card-text">${mercaderia.ingredientes}</p>
        <label>PREPARACION:</label>
        <p class="card-text">${mercaderia.preparacion}</p>
        <label>PRECIO:</label>
        <h4 class="card-text">$${mercaderia.precio}</h4>
        <button class="btn btn-warning" id="close" >cerrar</button>
      </div>
      </div>
  `
}
export default function mercaderiaCard(mercaderiaData){

  return `
  <div class="card mercaderia-item" style="width: 18rem;">
  <div class="contenedor-img">
    <img src="${mercaderiaData.imagen}">
    </div>
    <div class="card-body">
      <h5 class="card-title">${mercaderiaData.nombre}</h5>
      <p class="card-text">${mercaderiaData.tipo.descripcion}</p>
      <h4 class="card-text text-success">$${mercaderiaData.precio}</h4>
      <button class="btn btn-success btn-mercaderia"  mercaderia-id="${mercaderiaData.id}" >agregar</button>
      <button class="btn btn-warning  btn-detalle text-light"  mercaderia-id="${mercaderiaData.id}" >ver detalle</button>
    </div>
  </div>
`;

  }
  
  
  

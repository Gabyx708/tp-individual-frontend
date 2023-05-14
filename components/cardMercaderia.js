export default function mercaderiaCard(mercaderiaData){

  return `
  <div class="card" style="width: 18rem;">
    <img src="${mercaderiaData.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mercaderiaData.nombre}</h5>
      <p class="card-text">${mercaderiaData.tipo.descripcion}</p>
      <h4 class="card-text">$${mercaderiaData.precio}</h4>
      <a href="#" class="btn btn-primary">Ver detalle</a>
    </div>
  </div>
`;

  }
  
  
  

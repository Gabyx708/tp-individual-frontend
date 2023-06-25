import Mercaderia from "../Services/getMercaderias.js";

export default async function cardPedido(idMercaderias) {

  let precio = 0;
  const Mercaderias = idMercaderias.map(mercaderia => Mercaderia.ById(mercaderia));
  const Platillos = await Promise.all(Mercaderias);

  let pintarEnPantalla = Platillos
    .map(mr => `<tr><th scope="row">${mr.nombre}</th><td>$ ${mr.precio}</td></tr>`)
    .join('');

Platillos.forEach(plato => {
    precio += plato.precio;
});

  return `
    <div class="card-pedir">
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Detalle</th>
              <th scope="col">precio</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            ${pintarEnPantalla}
          </tbody>
        </table>
        <span class="total-comanda"><p class="text-white">total a pagar:<p><p>$${precio}<p></span>
      </div>
    </div>
  `;
}

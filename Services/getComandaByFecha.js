import { apiUrl } from "../config/config.js";

const urlGetComanda = `${apiUrl}/api/v1/Comanda`;

const getComandaFecha = async (fecha) => {
  let result = [];
  let response = await fetch(urlGetComanda + `?fecha=`+fecha);
  if (response.ok) {
    result = await response.json();
  }
  return result;
};

const FechaComanda = {
  GetByFecha: getComandaFecha,
};

export default FechaComanda;
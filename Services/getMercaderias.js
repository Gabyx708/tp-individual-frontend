import {apiUrl} from '../config/config.js'

let urlAllMercaderias = `${apiUrl}/api/v1/Mercaderia`;

const getMercaderias = async (tipo) => {
    let result = []
    let url = urlAllMercaderias;

    if(tipo != null){
        url = `${urlAllMercaderias}?tipo=${tipo}`
    }

    let response = await fetch(url)
            if(response.ok){
                result = await response.json();
            }   
        return result;
}


const getById = async (id) =>{
    let result = null;
    let url = urlAllMercaderias+`/${id}`;

    let response = await fetch(url)
    if(response.ok){
        result = await response.json();
    }   
return result;

}

const getMercaderiaFiltrada = async (order, tipo, nombre) => {
    let urlQuery = `${urlAllMercaderias}?`;
    let result;
    
    if (tipo != null) {
        urlQuery += `tipo=${tipo}&`;
    }

    if (nombre != null) {
        urlQuery += `nombre=${nombre}&`;
    }

    if (order != null) {
        urlQuery += `orden=${order}`;
    }

    let response = await fetch(urlQuery);
    if (response.ok) {
        result = await response.json();
    }
    console.log(urlQuery)
    return result;

};
  

const Mercaderia = {
    Get : getMercaderias,
    ById : getById,
    getMercaderiaFiltrada : getMercaderiaFiltrada
}

export default Mercaderia;

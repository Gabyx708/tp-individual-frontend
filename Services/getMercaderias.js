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

const getMercaderiasByNombre = async (nombre) => {
    let result = []
    let url = urlAllMercaderias;

    if(nombre != null){
        url = `${urlAllMercaderias}?nombre=${nombre}`
    }

    let response = await fetch(url)
            if(response.ok){
                result = await response.json();
            }   
        return result;
}

const getMercaderiaOrden = async (orden) => {
    let result = []
    let url = urlAllMercaderias;

    if(orden != null){
        url = `${urlAllMercaderias}?orden=${orden}`
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

const Mercaderia = {
    Get : getMercaderias,
    ById : getById,
    ByNombre : getMercaderiasByNombre,
    ByOrden : getMercaderiaOrden
}

export default Mercaderia;

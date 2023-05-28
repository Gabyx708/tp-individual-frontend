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

const Mercaderia = {
    Get : getMercaderias
}

export default Mercaderia;

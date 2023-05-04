import {apiUrl} from '../config/config'

const urlAllMercaderias = `${apiUrl}api/v1/Mercaderia`;

const getMercaderias = async () => {
    let result = []
    let response = await fetch(urlAllMercaderias)
            if(response.ok){
                result = await response.json();
            }   
        return result;
}

const Mercaderia = {
    Get : getMercaderias
}

export default Mercaderia;

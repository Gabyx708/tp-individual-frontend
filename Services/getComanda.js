import {apiUrl} from '../config/config.js'

const urlGetComanda = `${apiUrl}/api/v1/Comanda`;

const getComanda = async (id) => {
    let result = []
    let response = await fetch(urlGetComanda+`/`+id)
            if(response.ok){
                result = await response.json();
            }   
        return result;
} 


const Comanda = {
    Get : getComanda
}

export default Comanda;
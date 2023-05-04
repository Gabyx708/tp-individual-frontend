import {apiUrl} from '../config/config'

const urlGetComanda = `${apiUrl}api/v1/Comanda`;
const id = ''

const getComanda = async () => {
    let result = []
    let response = await fetch(urlAllMercaderias+`/${id}`)
            if(response.ok){
                result = await response.json();
            }   
        return result;
}

const Comanda = {
    Get : getComanda
}

export default Comanda;
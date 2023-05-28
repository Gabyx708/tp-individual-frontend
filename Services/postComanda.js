import {apiUrl} from '../config/config.js'

const endpointPostComanda = `${apiUrl}/api/v1/Comanda`;

const hacerPedido = async (listaMercaderias , formaEntrega) =>{

    const ComandaRequest = {
        mercaderias: listaMercaderias,
        formaEntrega: formaEntrega
      };

      try {
        const response = await fetch(endpointPostComanda, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ComandaRequest)
        });
    
        if (!response.ok) {
          throw new Error('Error en la solicitud POST');
        }
    
        const responseData = await response.json();
        return responseData;
        // Procesar la respuesta aquí
    
      } catch (error) {
        console.error('Error:', error);
      }
}

const Pedido = {
    Pedir : hacerPedido
}

export default Pedido;

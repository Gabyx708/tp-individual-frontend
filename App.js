import Mercaderia from './Services/getMercaderias.js'
import mercaderiaCard from './components/cardMercaderia.js';

let listaMercaderias = await Mercaderia.Get();
let main = document.getElementById("main");

listaMercaderias.forEach(element => {
    main.innerHTML += mercaderiaCard(element);
});
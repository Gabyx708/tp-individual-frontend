import Mercaderia from '../Services/getMercaderias.js'
import cardMercaderia from '../components/cardMercaderia.js'
import mercaderiaCard from '../components/cardMercaderia.js';

let allMercaderias = await Mercaderia.Get();

let section = document.getElementById("menu");

allMercaderias.forEach(mercaderia => {
    section.appendChild(mercaderiaCard(mercaderia));
});
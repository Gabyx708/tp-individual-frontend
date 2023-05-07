export default function mercaderiaCard(mercaderiaData){

const card = document.createElement('div');
card.setAttribute('class', 'card');

const cardHeader = document.createElement('div');
cardHeader.setAttribute('class', 'card-header')
cardHeader.textContent =  mercaderiaData.nombre;

const cardBody = document.createElement('div');
cardBody.setAttribute('class', 'card-body');

card.appendChild(cardHeader);
card.appendChild(cardBody);


    return card;
  }
  
  
  

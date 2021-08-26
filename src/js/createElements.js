import elementFood from '../js/menu.json';
import createElement from '../tamplate/tamplate.hbs'

const importGallary = document.querySelector('.js-menu')

const item = createElement(elementFood)
importGallary.insertAdjacentHTML('beforeend', item)

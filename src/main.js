import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
// const products = document.querySelector('.products');

// const imprime = async () => {
//   const dados = await fetchProductsList('computador');
//   const { results } = dados;
//   results.forEach(({ id, title, thumbnail, price }) => {
//     const obj = { id, title, thumbnail, price };
//     products.appendChild(createProductElement(obj));
//   });
// };

// imprime();

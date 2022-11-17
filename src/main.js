import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const products = document.querySelector('.products');
const p = document.createElement('p');
const h1 = document.createElement('h1');

const createdError = () => {
  h1.className = 'error';
  h1.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  products.appendChild(h1);
};

const loading = () => {
  p.className = 'loading';
  p.textContent = 'carregando...';
  products.appendChild(p);
};

const deletP = () => p.remove();

const imprime = async () => {
  loading();
  try {
    const dados = await fetchProductsList('computador');
    deletP();
    dados.forEach((element) => {
      const result = createProductElement(element);
      console.log(result);
      products.appendChild(result);
    });
  } catch (error) {
    console.log('erro');
    deletP();
    createdError();
  }
};

// const imprime = async () => {
//   loading();
//   const dados = await fetchProductsList('computador');
//   deletP();
//   return dados.forEach((element) => {
//     const result = createProductElement(element);
//     console.log(result);
//     products.appendChild(result);
//   })
// };

window.onload = () => {
  imprime();
};

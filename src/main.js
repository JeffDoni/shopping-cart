import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const products = document.querySelector('.products');
const p = document.createElement('p');
const h1 = document.createElement('h1');
const productsAll = document.querySelectorAll('.products');

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

productsAll.forEach((button) => {
  button.addEventListener('click', async (event) => {
    const father = document.querySelector('.cart__products');
    if (event.target) {
      const id = event.target.parentNode.firstChild.textContent;
      saveCartID(id);
      const result = await fetchProduct(id);
      father.appendChild(createCartProductElement(result));
    }
  });
});

window.onload = () => {
  imprime();
};

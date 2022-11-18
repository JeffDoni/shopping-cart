import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const products = document.querySelector('.products');
const p = document.createElement('p');
const h1 = document.createElement('h1');
const productsAll = document.querySelectorAll('.products');

const father = document.querySelector('.cart__products');
const price = document.querySelector('.total-price');

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
      products.appendChild(result);
    });
  } catch (error) {
    console.log('erro');
    deletP();
    createdError();
  }
};

const sum = () => {
  let soma = 0;
  getSavedCartIDs().map((elementId) => Promise.all([fetchProduct(elementId)])
    .then(
      (res) => res.map((response) => {
        soma += response.price;
        price.textContent = soma;
        return price.innerHTML;
      }),
    ));
};

father.addEventListener('click', (event) => {
  const sub = event.target.parentNode.lastElementChild.lastElementChild.innerHTML;
  const number1 = Number(sub);
  const number2 = Number(price.innerHTML);
  const result = number2 - number1;
  price.innerHTML = '';
  price.innerHTML = result;
  console.log(result);
});

const carShopping = () => {
  productsAll.forEach((button) => {
    button.addEventListener('click', async (event) => {
      if (event.target) {
        const id = event.target.parentNode.firstChild.textContent;
        saveCartID(id);
        const result = await fetchProduct(id);
        father.appendChild(createCartProductElement(result));
        sum();
      }
    });
  });
};

carShopping();

const saveLocal = () => {
  const ids = getSavedCartIDs();
  ids.map((element) => {
    const data = fetchProduct(element);
    return Promise.all([data]).then((values) => values
      .map((res) => father.appendChild(createCartProductElement(res))));
  });
};

window.onload = () => {
  imprime();
  saveLocal();
  sum();
};

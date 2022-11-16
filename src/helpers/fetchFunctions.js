export const fetchProduct = () => {
  // seu código aqui

};

export const fetchProductsList = async (param) => {
  // seu código aqui
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

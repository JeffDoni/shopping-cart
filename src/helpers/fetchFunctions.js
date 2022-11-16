export const fetchProduct = () => {
  // seu código aqui

};

export const fetchProductsList = async (param) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!fetchProduct) {
      throw new Error('Termo de busca não informado');
    }
    return data.results;
  } catch (erro) {
    Error('Termo de busca não informado');
  }
};

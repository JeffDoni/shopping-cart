export const getAddress = (cep) => {
  const tamanho = 8;
  if (!cep || cep.length !== tamanho) {
    throw new Error('O CEP precisa ser informado com 8 dígitos');
  }
  const url1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const url2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  return Promise.any([fetch(url1), fetch(url2)])
    .then((res) => res.json());
};

export const searchCep = async () => {
  const spanCep = document.querySelector('.cart__address');
  const inputCep = document.querySelector('.cep-input').value;

  try {
    const api = await getAddress(inputCep);

    if (!api.cep) {
      spanCep.innerHTML = 'CEP não encontrado';
    }
    const rua = api.address || api.street;
    const bairro = api.district || api.neighborhood;
    spanCep.innerHTML = `${rua} - ${bairro} - ${api.city} - ${api.state}`;
  } catch (error) {
    spanCep.innerHTML = 'CEP não encontrado';
  }
};

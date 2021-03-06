const axios = require('axios');

const login = async ({email , password}) => {
    const loggingIn = await  axios.post('https://prova.deploy.profranchising.com.br/auth/login',
     {
        username: email,
        password,
      });

      return loggingIn;
};

const listProducts = async (token, query) => {
  const response = await axios({
    method: 'get',
    url: `https://prova.deploy.profranchising.com.br/product/list${query}`,
    headers: { 'Authorization': token }
  });

  return response.data;
};

const saveProduct = async (token, bodyProduct) => {
  const response = await axios({
    method: 'post',
    url: 'https://prova.deploy.profranchising.com.br/product/save',
    data: bodyProduct,
    headers: { 'Authorization': token }
  });

  return response.data;
};

const deleteProduct = async (token, id) => {
  await axios({
    method: 'delete',
    url: `https://prova.deploy.profranchising.com.br/product/delete/${id}`,
    headers: { 'Authorization': token }
  });
};

module.exports = {
  login,
  listProducts,
  saveProduct,
  deleteProduct,
};

const axios = require('axios').default;


// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  //baseURL: "https://alula1011back.azurewebsites.net",
  baseURL: "http://localhost:3000",
});

module.exports = api;

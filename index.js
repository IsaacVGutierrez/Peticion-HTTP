const http = require('http');

function getContentFromURL(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

const url = 'http://www.romeroysimon.com/comun/paginaseguracolab.html'; // Define la URL aquí

getContentFromURL(url)
  .then((content) => {
    const lines = content.split('\n');
    lines.forEach((line) => console.log(line));
  })
  .catch((error) => {
    console.error('Ocurrió un error al realizar la petición:', error.message);
  });

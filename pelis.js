const { readFileSync } = require("fs");
const pelisJSON = JSON.parse(readFileSync(__dirname + "/pelis.json"));

function sinParametros() {
  return pelisJSON;
}

const searchPelis = (texto, array) => {
  return array.filter((element) =>
    element.title.toLowerCase().includes(texto.toLowerCase())
  );
};

const sortPelis = (texto, arrayPelis) => {
  const resultado = arrayPelis.sort((a, b) => {
    if (a[texto] > b[texto]) {
      return 1;
    }
    if (a[texto] < b[texto]) {
      return -1;
    }
    return 0;
  });
  return resultado;
};

const tagPelis = (texto, array) => {
  return array.filter((element) => element.tags.includes(texto));
};

const noFormato = (array) => {
  return JSON.stringify(array);
};

exports.busqueda = (criterios) => {
  let peliculas = sinParametros();
  if (criterios.sort) {
    peliculas = sortPelis(criterios.sort, peliculas);
  }
  if (criterios.search) {
    peliculas = searchPelis(criterios.search, peliculas);
  }
  if (criterios.tag) {
    peliculas = tagPelis(criterios.tag, peliculas);
  }
  if (criterios.hasOwnProperty("no-format")) {
    peliculas = noFormato(peliculas);
  }
  return peliculas;
};

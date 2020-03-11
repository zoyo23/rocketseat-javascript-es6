// REST

const usuario = {
    nome: "Lucas",
    idade: 24,
    empresa: "BMG"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

function soma2(a, b, ...params) {
    return params;
}
console.log(soma(1, 3, 4));
console.log(soma2(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuarioSpread = {
    nome: "Lucas",
    idade: 24,
    empresa: "BMG"
};

const usuarioSpread2 = { ...usuarioSpread, nome: "Carol" };

console.log(usuarioSpread2);
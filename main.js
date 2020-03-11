const usuario = {
    nome: "Lucas",
    idade: 24,
    endereco: {
        cidade: "Belo Horizonte",
        estado: "MG"
    }
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);
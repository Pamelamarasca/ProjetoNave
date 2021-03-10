console.log('----aqui inicia objeto----');

const usuário = {
    nome: 'Pâmela silva',
    idade: 22,
    endereco: {
        rua: 'santa tecla',
        numero: 5


    },
    func: () => {
        console.log("projeto 2")
    }

}

console.log(usuário.nome);
console.log(usuário.endereco.rua);
usuário.func();
console.log('----colchetes----');
console.log(usuário['nome'])
console.log(usuário['endereco']['rua'])
console.log(usuário['endereco']['numero'])
usuário.func([])
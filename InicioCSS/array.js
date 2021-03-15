

const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

const result = colaboradores.map(colaborador => {
    return colaborador.name;
});
console.log(result);
//filter -----------------
const todosColaboradores = colaboradores.filter((colaborador) => {
    return colaborador.cargo === "front-end";
});

console.log("Todos colaboradores:", todosColaboradores);

//Find---------------------------------------------
const idade = colaboradores.find(colaborador => {
    return colaborador.idade > 23;
})
console.log(idade);


const menores = colaboradores.find(colaborador => {
    return colaborador.idade < 18;
})
console.log(idade);
//Some----------------------------4
const existeEstagiario = colaboradores.some((colaborador) => {
    return colaborador.cargo === "estagiario";
});

console.log("existe algum estagiario?", existeEstagiario);
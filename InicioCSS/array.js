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

//exercicio 1
const desafio1 = colaboradores.map((colab, indice) => {
    return colab.name
})
console.log(desafio1)

//exercicio 2
const desafio2 = colaboradores.filter(colab => {
    return colab.cargo === 'front-end'
})
console.log(desafio2)

//exercicio 3
const desafio3 = colaboradores.find(colab => {
    return colab.idade > 23
})
console.log(desafio3)

//exercicio 4
const desafio4 = colaboradores.filter(colab => {
    return colab.idade > 18
})
console.log(desafio4)

//exercicio 5
const desafio5 = colaboradores.some(colab => {
    return colab.cargo === 'estagiario'
})
console.log(desafio5)


//AULA 5------------
const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("desafio p1 feito com sucesso"));
        }, 3000);
    }

    )
}

const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("desafio p2 feito com sucesso"));
        }, 3000);
    }
    )
}
//3

async function pt3() {
    try {
        const exibi = await Promise.all([p1(), p2()]);
        console.log(exibi)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Fim da execução")
    }

}

pt3()

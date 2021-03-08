const inicio = 30;
const final = 10;

const subtrai = function (inicio, final) {
	const resultado = inicio - final;
	console.log(resultado);
};

subtrai(inicio, final);

//parametro é oq fica entre os parenteses da função.
// constante divisão é a função.
console.log('----aqui testaZero----');
const testaZero = (valor) => {
	if (valor === 0) {
		console.log('o valor é igual');
	} else {
		console.log('não é igual');
	}
};
testaZero(0);

import {format} from "date-fns"

export  const formatDate = (dataAtual) => {  

    const dataFormatada = format(dataAtual,"dd/MM/yyyy")
    console.log(dataFormatada);
    
} 
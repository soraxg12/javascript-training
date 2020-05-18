const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

function mostraNome({nome ,endereco:{cidade},endereco:{estado}}){
    console.log(nome);
    console.log(cidade);
    console.log(estado); 
}
 mostraNome(empresa)


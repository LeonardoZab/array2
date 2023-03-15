let valor_cidade = []

function inserir(){
    let cidade = document.getElementById("cidade").value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
}

function deletar(){
    let cidade = document.getElementById("cidade").value
    valor_cidade.pop(cidade)
    console.log(valor_cidade)
}
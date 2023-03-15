let valor_cidade = []
let res = document.getElementById('res')

function inserir(){
    let cidade = document.getElementById("cidade").value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade + ", "
}

function inserir_inicio(){
    let cidade = document.getElementById("cidade").value
    valor_cidade.unshift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade


}

function deletar(){
    valor_cidade.pop(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}


function excluir_inicio(){
    valor_cidade.shift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

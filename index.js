// inicio da função calc
function calc(){
// decaração das variáveis utilizadas
var empregado = document.getElementById("empregado").value
var qtdflihos = document.getElementById("qtdfilhos").value
var contribuicao = document.getElementById("contribuicao").value
let salariofamilia = null
// condição utilizada na função "calc"
if(contribuicao <= 806.80){
    salariofamilia = qtdflihos * 41.37
}
else if(contribuicao >= 806.80 && contribuicao <= 1212.64){
    salariofamilia = qtdflihos * 29.16 
}else{
    salariofamilia = 0.16
}
// alerta para retornar o resultado da contribuição
alert(empregado+", O salário Família é de: R$"+salariofamilia)
}

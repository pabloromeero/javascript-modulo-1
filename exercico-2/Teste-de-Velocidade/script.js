const veiculo1 = prompt("Insira o nome do primeiro veículo:")
const veiculo2 = prompt("Insira o nome do segundo veículo:")
const velocidadeVei1 = parseFloat(prompt("Insira a velocidade do primeiro veículo:"))
const velocidadeVei2 = parseFloat(prompt("Insira a velocidade do segundo veículo:"))
if (velocidadeVei1 > velocidadeVei2) {
    alert(`${veiculo1} é mais veloz.`)
} else if (velocidadeVei1 < velocidadeVei2) {
    alert(`${veiculo2} é mais veloz.`)
} else {
    alert("As velocidades são iguais.")
}
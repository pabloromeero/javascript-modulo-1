const personagem1 = prompt('Insira o nome do primeiro personagem:')
const poderAtaqueP1 = parseFloat(prompt('Insira o quantidade do poder de ataque do primeiro personagem:'))

const personagem2 = prompt('Insira o nome do segundo personagem:')
const vidaP2 = parseFloat(prompt('Insira a quantidade de pontos de vida do segundo personagem:'))

const poderDefesaP2 = parseFloat(prompt("Insira a quantidade do poder de defesa do segundo personagem:"))
const escudo = parseInt(prompt('O segundo personagem possui escudo?(1 para sim - 2 para não)'))

if (poderAtaqueP1 > poderDefesaP2 && escudo == 2) {
    const vidaAtualizada = vidaP2 - (poderAtaqueP1 - poderDefesaP2)
    alert(`${personagem1} tem ${poderAtaqueP1} de ataque e ${personagem2} tem ${poderDefesaP2} de defesa, ficando com uma vida de ${vidaAtualizada}`)
}
else if (poderAtaqueP1 > poderDefesaP2 && escudo == 1) {
    const vidaAtualizada = vidaP2 - ((poderAtaqueP1 - poderDefesaP2) / 2)
    alert(`${personagem1} tem ${poderAtaqueP1} de ataque e ${personagem2} tem ${poderDefesaP2} de defesa, ficando com uma vida de ${vidaAtualizada}`)
}
else if (poderAtaqueP1 <= poderDefesaP2) {
    alert("A quantidade de dano é 0")
    alert(`${personagem1} tem ${poderAtaqueP1} de ataque e ${personagem2} tem ${poderDefesaP2} de defesa, ficando com uma vida de ${vidaP2}`)
}
else {
    alert("Erro. Recarregue a página.")
}


const nome = prompt("Informe o  primeiro nome do recruta:")
const sobreNome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Informe o campo de estudo do recruta:")
const anoNascimento = prompt("Informe o seu ano de nascimento do recruta:")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoNascimento)
)
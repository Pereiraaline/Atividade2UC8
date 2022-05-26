/* SISTEMA EVENTOS

-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

-Listar participantes e palestrantes por evento.
 
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

let idadeParticipante = 19
if (idadeParticipante > 18)
{
    console.log ("Cadastro permitido")
}
else
{
    console.log ("Não permitido cadastro de menores de 18 anos!")
}

let listaDeParticipantes = ["Aline","Pedro","João","Maria","Alexandre","Amanda","Carla","Luiz","José"]
for (let nome of listaDeParticipantes) 
{
    console.log (`Participante: ${nome}`)
}

let numerodeParticipantes = 9
if (numerodeParticipantes <= 100)
{
    console.log("Novo Cadastro Permitido!")
}
else
{
    console.log("Cadastro não permitido! Número de participantes excede o total!")
}

let listadePalestrantes = ["Alberto","Cristina"]
for (let nome of listadePalestrantes)
{
    console.log (`Palestrante: ${nome}`)
}



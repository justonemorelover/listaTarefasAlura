
/*export*/const BotaoConclui = () => { //componentes declarados com botão maiusculo;
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button'); //add uma identificação class ao conteúdo;
    botaoConclui.innerText = 'concluir'; //insere o texto no botão;
    botaoConclui.addEventListener('click', concluiTarefa); //ao clicar chama a função 'concluiTarefa'

    return botaoConclui;
}

/*export*/const concluiTarefa = (evento) => {
    const botaoConclui = evento.target; //rastreia o local do evento;
    const tarefaCompleta = botaoConclui.parentElement; //elemento pai de 'botaoConclui'
    tarefaCompleta.classList.toggle('done'); //alterna a definição d identificador class do conteúdo;
}

export default BotaoConclui; //ou

// //export { //exporta um objeto//
//     BotaoConclui,
//     concluiTarefa
// }
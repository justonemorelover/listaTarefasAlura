

const concluiTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
}

const BotaoConclui = (atualiza, id) => { //componentes declarados com botão maiusculo;
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button'); //add uma identificação class ao conteúdo;
    botaoConclui.innerText = 'concluir'; //insere o texto no botão;
    botaoConclui.addEventListener('click', () => concluiTarefa(atualiza, id)); //ao clicar chama a função 'concluiTarefa'

    return botaoConclui;
}


export default BotaoConclui; //ou

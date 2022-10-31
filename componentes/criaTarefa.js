
import BotaoConclui from "./concluirTarefa.js";
import BotaoDeleta from "./deletarTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";


const input = document.querySelector('[data-form-input]');

export const handleNovoItem = (evento) => {

    evento.preventDefault(); //previne o comportamento padrão REFRESH do 'form';
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //nome da chave com argumento no 'getItens'
    //'parse' transforma string em objeto; 'getItem pega um dado do localStorage;
    const valor = input.value;
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY');
    const concluida = false
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    };
    const tarefasAtualizadas = [...tarefas, dados];
   
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)) //chave/valor em string 
    //'setItem' armazena o dados da seção no LocalStorage; 'JSON.stringfy' converte o objeto em string

    input.value = " "; //limpa o conteúdo do imput;
    input.focus(); //retorna o cursor ao input
    carregaTarefa(); //carrega as tarefas armazenadas no localStorage;
}

export const Tarefa = ({ valor, horario, concluida }, id) => {
    
    const tarefa = document.createElement('li'); // cria um elemento 'li';
    const conteudo = `<p class="content">${horario} | ${valor}</p>` //insere este codigo no HTML;

    if ( concluida ) {
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task'); //add uma identificação class ao conteúdo;
    tarefa.innerHTML = conteudo; //insere código html no arquivo;
    tarefa.appendChild(BotaoConclui(carregaTarefa, id)); //insere um apêndice no item filho;
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id)); //insere um apêndice no item filho;

    return tarefa
}
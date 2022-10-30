import BotaoConclui from "./componentes/concluirTarefa.js";
import BotaoDeleta from "./componentes/deletarTarefa.js";

//(() => { // IIFE: esse recurso retira o arquivo do escopo global evitando o acesso externo através do console;  

const novaTarefa = document.querySelector('[data-form-button]');
const input = document.querySelector('[data-form-input]');

const criarTarefa = (evento) => {

    evento.preventDefault(); //previne o comportamento padrão REFRESH do 'form';
    
    const lista = document.querySelector('[data-list]');
    const valor = input.value;
    const tarefa = document.createElement('li'); // cria um elemento 'li'
    const conteudo = `<p class="content">${valor}</p>`
    
    lista.appendChild(tarefa); //cria um elemento filho;
    tarefa.innerHTML = conteudo; //insere código html no arquivo;
    tarefa.classList.add('task'); //add uma identificação class ao conteúdo;
    tarefa.appendChild(BotaoConclui()); //insere um apêndice no item filho;
    tarefa.appendChild(BotaoDeleta()); //insere um apêndice no item filho;
    input.value = " "; //limpa o conteúdo do imput;
    input.focus(); //retorna o cursor ao input
}

novaTarefa.addEventListener('click', criarTarefa);

//})(); // IIFE: esse recurso retira o arquivo do escopo global evitando o acesso externo através do console;


import { clienteNew, lerClientes, atualizaClientes, gerarId } from './functions.js';
import { question, questionInt } from 'readline-sync';
import { jsPDF } from 'jspdf';

const doc = new jsPDF();

// Consultar todos os clientes:
function consultarClientes() {
    const currentData = lerClientes();
    return console.table(currentData);
};

// Cadastrar um novo cliente:
function inserirCliente() {
    const currentData = lerClientes();
    const id = gerarId(currentData);
    const nome = question('Digite o NOME do novo cliente:  ');
    const cpf = question('Digite o CPF do novo cliente:  ');
    const email = question('Digite o EMAIL do novo cliente:  ');
    const novoCliente = clienteNew(id, nome, cpf, email);
    currentData.push(novoCliente);
    atualizaClientes(currentData);
    return console.table(currentData);
};

// Consultar um cliente pelo Id:
function consultarCliente() {
    const buscar = questionInt('Digite o ID procurado:  ');
    const currentData = lerClientes();
    return console.table(currentData.find(array => array.id == buscar));
};

// Excluir um cliente pelo Id:
function excluirCliente() {
    const currentData = lerClientes();
    const buscar = questionInt('Digite o ID do cliente que sera excluido:  ');
    const index = (currentData.findIndex(array => array.id == buscar));
    currentData.splice(index, 1);
    atualizaClientes(currentData);
    return console.table(currentData);
};

// Atualizar o cadastro do cliente:
function alteraCliente() {
    const currentData = lerClientes();
    const buscar = questionInt('Digite o ID do cliente que sera atualizado:  ');
    const index = (currentData.findIndex(array => array.id == buscar));
    currentData[index].nome = question('Altere o NOME do cliente:  ') || currentData[index].nome;
    currentData[index].cpf = question('Altere o CPF do cliente:  ') || currentData[index].cpf;
    currentData[index].email = question('Altere o EMAIL do cliente:  ') || currentData[index].email;
    atualizaClientes(currentData);
    return console.table(currentData);
};

// Relatório de todos os clientes
function gerarRelatorio() {
    const clientes = lerClientes();
    let dados = '';
    for (let i = 0; i < clientes.length; i++) {
        for (let key in clientes[i]) {
            dados += `${key}: ${clientes[i][key]}\n`;
        }
        dados += `-------------------------------------------------------------------------------------\n`;
    }
    let file = question('Digite como chamara este arquivo:  ');
    doc.text(dados, 10, 10);
    if (file == '' || file == null || file == undefined) {
        file = 'relatorio'
    }
    doc.save('./src/relatorios/'+ file + '.pdf');
    return console.log(`Arquivo salvo com o nome: ${file}.pdf`);
};

export const routes = {
    consultarClientes,
    consultarClientes, 
    inserirCliente, 
    consultarCliente, 
    excluirCliente, 
    alteraCliente, 
    gerarRelatorio
}
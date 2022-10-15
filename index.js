/*
Instituição: Senac
Curso: Back-end Turma: 2022.13.103
Aluno: Wevesson Madson da Silva
Professor: Bruno José
Exercício Original: Vetor de objetos para cadastrar, consultar, excluir e atualizar os clientes do vetor

Exercício Atual: Adicionar rota para gerar um relatório em PDF com todos os clientes.
*/

import { routes } from './src/routes.js';
import { question, questionInt } from 'readline-sync';

do {

    var escolha = questionInt(`
Escolha o que deseja fazer:

1- Consultar todos os clientes;
2- Cadastrar um novo cliente;
3- Consultar um cliente pelo id
4- Exluir cliente pelo id
5- Atualizar o cadastro de um cliente
6- Gerar relatorio PDF com todos os clientes cadastrados
7- SAIR
`);

    switch (escolha) {
        case 1: {
            // Consultar todos os clientes:
            routes.consultarClientes();
        }
            break;
        case 2: {
            // Cadastrar um novo cliente:
            routes.inserirCliente();
        }
            break;
        case 3: {
            // Consultar um cliente pelo Id:
            routes.consultarCliente();
        }    
            break;
        case 4: {
            // Excluir um cliente pelo Id:
            routes.excluirCliente();
        }
            break;
        case 5: {
            // Atualizar o cadastro do cliente:
            routes.alteraCliente();
        }
            break;
        case 6: {
            // Relatório de todos os clientes
            routes.gerarRelatorio();
        }
            break;
        case 7:
            // Sair
            console.log(`Saindo do sistema... Volte sempre!`);
            break;
        default:
            console.log(`opcao nao disponivel.`);
    }
    var repete = 'n';
    if (escolha != 7) {
        repete = question(`Deseja continuar no sistema? S para sim e N para nao:  `);
        if (repete.toLowerCase() != 's') {
            console.log(`Saindo do sistema... Volte sempre!`);
        }
    }
} while (repete.toLowerCase() == 's');
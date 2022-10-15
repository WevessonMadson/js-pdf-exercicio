import { writeFileSync, readFileSync} from 'fs';

export function clienteNew(id, nome, cpf, email) {
    return {
        id,
        nome,
        cpf,
        email
    };
};

export function lerClientes () {
    const dados = readFileSync('./src/clientes.json', 'utf-8');
    return JSON.parse(dados);
};

export function atualizaClientes (content) {
    writeFileSync('./src/clientes.json', JSON.stringify(content));
};

export function gerarId (dados) {
    let lastId = dados.reduce((acum, atual) => acum.id > atual.id ? acum.id : atual.id);
    return lastId += 1
};
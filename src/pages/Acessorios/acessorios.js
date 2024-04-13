import acessorioIcon from '../../imagens/icons/acessorios.png'

class Acessorio {
    constructor (nome, preco, quantidade, descricao, imagemAcessorio) {
        this.nome = nome; 
        this.preco = preco;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.imagemAcessorio = imagemAcessorio; 
    }
}; 

const Acessorio1 = new Acessorio('Acessorio1', 10, 20, 'Melhor roupa do nordeste', acessorioIcon); 
const Acessorio2 = new Acessorio('Acessorio2', 20, 30, 'Melhor roupa do nordeste', acessorioIcon); 
const Acessorio3 = new Acessorio('Acessorio3', 10, 20, 'Melhor roupa do nordeste', acessorioIcon); 
const Acessorio4 = new Acessorio('Acessorio4', 20, 0, 'Melhor roupa do nordeste', acessorioIcon); 

export const AcessoriosProdutos = [Acessorio1, Acessorio2, Acessorio3, Acessorio4]


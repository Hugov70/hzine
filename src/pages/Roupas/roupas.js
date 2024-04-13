import roupaIcon from '../../imagens/icons/camiseta.png'

class Roupa {
    constructor (nome, preco, quantidade, descricao, imagemRoupa) {
        this.nome = nome; 
        this.preco = preco;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.imagemRoupa = imagemRoupa; 
    }
}; 

const Roupa1 = new Roupa('Roupa', 10, 20, 'Melhor roupa do nordeste', roupaIcon); 
const Roupa2 = new Roupa('Roupa2', 20, 30, 'Melhor roupa do nordeste', roupaIcon); 
const Roupa3 = new Roupa('Roupa3', 10, 20, 'Melhor roupa do nordeste', roupaIcon); 
const Roupa4 = new Roupa('Roupa4', 20, 0, 'Melhor roupa do nordeste', roupaIcon); 

export const RoupasProdutos = [Roupa1, Roupa2, Roupa3, Roupa4]


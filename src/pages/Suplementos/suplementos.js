import suplementoIcon from '../../imagens/icons/proteina.png'

class Suplemento {
    constructor (nome, preco, quantidade, descricao, imagemSuplemento) {
        this.nome = nome; 
        this.preco = preco;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.imagemSuplemento = imagemSuplemento; 
    }
}; 

const Suplemento1 = new Suplemento('Suplemento', 10, 20, 'Melhor suplemento do nordeste', suplementoIcon); 
const Suplemento2 = new Suplemento('Suplemento2', 20, 30, 'Melhor suplemento do nordeste', suplementoIcon); 
const Suplemento3 = new Suplemento('Suplemento3', 10, 20, 'Melhor suplemento do nordeste', suplementoIcon); 
const Suplemento4 = new Suplemento('Suplemento4', 20, 0, 'Melhor suplemento do nordeste', suplementoIcon); 
const Suplemento5 = new Suplemento('Suplemento5', 10, 20, 'Melhor suplemento do nordeste', suplementoIcon); 
const Suplemento6 = new Suplemento('Suplemento6', 20, 0, 'Melhor suplemento do nordeste', suplementoIcon); 

export const SuplementosProdutos = [Suplemento1, Suplemento2, Suplemento3, Suplemento4, Suplemento5, Suplemento6]


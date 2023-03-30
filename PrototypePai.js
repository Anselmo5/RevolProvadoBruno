function Pai(nome,idade,aniversario){
    this.nome = nome
    this.idade = idade
    this.aniversario = aniversario
}

const pai1 = new Pai('marcos', 34, ' 23 de março')

Pai.prototype.filho = function() {
    return` O meu nome é ${this.nome = String('Gabriel')} e meu pai e esse ${this.nome}, tenho ${this.idade = Number('19') } anos e meu aniversario ${this.aniversario = String(' 24 de Fevereiro')}`;
}

console.log(pai1.filho());


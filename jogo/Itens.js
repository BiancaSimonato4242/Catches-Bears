class Itens {
    constructor() {
      //Int = coloca os numeros a seguir como inteiros
      this.imagem = imgItens[int(random(0, 3.9))];
      this.posX = random(10, 590);
      this.posY = 0;
      this.velocidade = random(1, velocidade);
      this.largura = 47;
      this.altura = 42;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    mova() {
      //faz os itens andarem
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }
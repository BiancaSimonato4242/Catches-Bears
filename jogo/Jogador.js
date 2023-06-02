
//classe e configuraçoes do jogador
class Jogador {
    constructor() {
      this.imagem = loadImage("jogo/imgJogo/ursoroxo.png");
      this.posX = 200;
      this.posY = 260;
      this.velocidade = 7;
      this.altura = 132;
      this.largura = 122;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    mova() {
      //faz o personagem andar
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
  
      //codigos para dar "vida" ao movimentos do persnagem pelas teclas.
      //os numeros em () sao os codigos das setas no telcado e o os "posX" e "xFinal" sao as posiçoes no "plano carteisano" invisivel que existe no cenario.
  
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
  
      //defini a posiçao da imagem
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }
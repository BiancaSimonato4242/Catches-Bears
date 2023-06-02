function executarJogo(){
    background(imgFundo);
    jogador.mova();
  
    for (let i = 0; i < itens.length; i++) {
      itens[i].mova();
  
      if (itens[i].posY > 400) {
        itens[i] = new Itens(itens[i].posX);
      }
  
      if (
        //if que faz acontecer a colisao dos objetos
        jogador.xInicial < itens[i].xFinal &&
        jogador.xFinal > itens[i].xInicial &&
        jogador.yInicial < itens[i].yFinal &&
        jogador.yFinal > itens[i].yInicial
      ) {
        //identfica as diferenças entre as configs da bomba e dos outros objetos
        if (itens[i].imagem == imgItens[3]) {
          pontuacao = 0;
          itens[i] = new Itens(itens[i].posX);
          velocidade = 5;
          som2.play();
          
          vidas -= 1;

          if(vidas == 0){
            controleTela = "FINAL";
          }
        }
         else {
          itens[i] = new Itens(itens[i].posX);
          pontuacao++;
          velocidade += 0.5;
          som.play();
        }

    }
    text("pontuação:" + pontuacao, 100, 20);
    text("vidas:" + vidas, 400, 20);
}
}
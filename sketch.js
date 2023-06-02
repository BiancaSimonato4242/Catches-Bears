//variaveis dos objetos do jogo
var jogador;
var nuvem;
var itens = [];
var imgItens = [];
var pontuacao = 0;
var som;
var som2;
var velocidade = 5;
var imgAbertura; 
var controleTela = "INICIO";
var imgFinal;
var vidas = 3;

//carregar as imagens no jogo
function preload() {
  som = loadSound("jogo/SONS/Bubbles.mp3");
  som2 = loadSound("jogo/SONS/jab.mp3");
  imgFundo = loadImage("jogo/imgJogo/FUNDO (2).png");
  imgJogador = "jogo/imgJogo/ursoroxo.png";
  imgNuvem = "jogo/imgJogo/nuvem.png";
  jogador = new Jogador();
  imgItens[0] = loadImage("jogo/imgJogo/ESTRELA.png");
  imgItens[1] = loadImage("jogo/imgJogo/cupcake.png");
  imgItens[2] = loadImage("jogo/imgJogo/arco-iris.png");
  imgItens[3] = loadImage("jogo/imgJogo/bomba.png");
  imgAbertura = loadImage("jogo/imgJogo/INICIO.gif");
  imgFinal = loadImage("jogo/imgJogo/FINAL.gif");




  //cria novos objetos e entre () é o numero correspondente ao local em que eles estao
  itens[0] = new Itens();
  itens[1] = new Itens();
  itens[2] = new Itens();
  itens[3] = new Itens();
}

//tamanho da interface
function setup() {
  createCanvas(600, 400).parent ("jogo");
}

function keyPressed(){
  if(keyCode==32){
    controleTela = "JOGO";
  }
  if(keyCode==13){
    controleTela = "INICIO";
  }
}

//dar funcionameto aos objetos da interface
function draw() {
  if(controleTela == "INICIO"){
    mostraAbertura();
  } 
  else{
    if(controleTela == "JOGO"){
      executarJogo(); 
    } 

if(controleTela == "FINAL"){
  Final();
}
  if(controleTela == "INICIO"){
    mostraAbertura();
        } 
    }   
}

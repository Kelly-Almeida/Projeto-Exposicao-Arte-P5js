let musica;
let musicas = [];
let freq;
let x = 0;
let numM = 0; 
let primeiraRep = true

function preload(){
  mesa = loadImage("mesa.png");
  cadeira = loadImage("cadeira-de-jantar (2).png");
  bebidas = loadImage("licor.png");
  arbusto = loadImage("arbustos.png");
  arvore = loadImage("arvore.png");
  bonequinho = loadImage("bonequinho.png")
  
  musica = loadSound('Os Barões da Pisadinha - Já Que Me Ensinou a Beber (Áudio Oficial) [y_HY1jZlUP0].mp3');


  musicas[0] = loadSound('Os Barões da Pisadinha - Já Que Me Ensinou a Beber (Áudio Oficial) [y_HY1jZlUP0].mp3');
  musicas[1] = loadSound('Luiz Gonzaga • O Cheiro da Karolina • VERSÃO FORROZINHO • Karolina UM UM UM [9gbWg7EGFEc].mp3');
  musicas[2] = loadSound('CORONA - Biu Do Piseiro ( Áudio Oficial ) [xL6oXd6mFZY].mp3');
  musicas[3] = loadSound('Amor na praia - Natan - O que eu mais quero é te amar na praia [cxgJwW-Yi0c].mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
  background(240, 100, 20);
  for(let i = 0; i < 100; i++){
      stroke(60, 10, 100);
      strokeWeight(random(1, 4));
      point(random(width), random(height));
    }

    //Parte do som 
    musicas[numM].play();
    freq = new p5.FFT();
}

function draw() {
  //Céu bem interior
  
  
  strokeWeight(5);
  stroke(0, 0, 0);
  fill(130, 80, 60);
  rect(-10, height * 0.8, width + 10, (height - (height * 0.8) + 10))
  
  image(mesa, width * 0.15, height * 0.65, 250, 250)
  image(cadeira, width * 0.30, height * 0.7, 180, 180)
  image(bebidas, width * 0.20, height*0.66)

  for( let i = 0.0; i < 0.5; i+=0.1){
    image(arbusto, width * i, height * 0.89, 200, 200);
  }
  
  image(arvore, width * -0.1, height * 0.2, 600, 600);
  image(bonequinho, width * 0.5, height*0.6, 400, 400);


  //Parte do som
  let cor = map(x, 0, 300, 0, 360);
  //Caixa
  fill(5)
  strokeWeight(10)
  rect(width* 0.7, height*0.6, 300, 300);
  
    //Calculo de grave
  let espectro = freq.analyze();
  let graves = freq.getEnergy("bass");
  map(graves, 0, 255, 250, 300);

  //Amplificadores estáticos
  fill(cor, 100, 100)
  strokeWeight(4)
  stroke(0,0,0)
  ellipse(width * 0.78, height * 0.75, 240, 240)
  fill(0, 0, 0)
  ellipse(width * 0.78, height * 0.75, 40, 40)

  fill(cor, 100, 100);
  x += 5;
  if(x > 360){
    x =0;
  }

  //Amplificadores dinâmicos
  strokeWeight(1);
  stroke(cor - 20, 80, 80, 0.5);
  
  for (let i = 1; i < 5; i+= 0.3){
    ellipse(width * 0.78, height * 0.75, graves/i, graves/i);
  }
  
  fill(0,0,0);
  ellipse(width * 0.78, height * 0.75, graves/4 , graves/4);
  
  fill(cor, 100, 100);
  circle(width * 0.84, height * 0.65, 30);
}

function mousePressed (){

    
   
  if (musicas[numM].isPlaying()) {
    musicas[numM].stop();
  }

  
  numM++;
  
  if (numM >= musicas.length) {
    numM = 0;
    musicas[4] = loadSound('Os Barões da Pisadinha - Já Que Me Ensinou a Beber (Áudio Oficial) [y_HY1jZlUP0].mp3');
    
  }else{
    musicas[numM].play();
  }

  
}
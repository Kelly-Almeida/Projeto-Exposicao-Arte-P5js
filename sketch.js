//Decorações do chão

let ampli = 50, freq = 20, x = 0, y =0;
let alt, posi = 0, inicioPeixe;

let dinamicos = [];

let peixes = [];

let bolhas = [];

function preload(){
  //Elementos dinamicos
  peixes[0] = loadImage("peixe.png");
  peixes[1] = loadImage("baiacu.png");
  peixes[2] = loadImage("peixe-1.png");
  peixes[3] = loadImage("peixe-espiga-azul.png"); 
  peixes[4] = loadImage("peixe-2.png");
  peixes[5] = loadImage("peixe-gato.png");
  peixes[6] = loadImage("peixe-palhaco.png");
  peixes[7] = loadImage("tubarao.png");
  peixes[8] = loadImage("cavalo-marinho.png");
  peixes[9] = loadImage("baleia.png");
  
  
  //Elementos estáticos
  coral = loadImage("coral.png");
  estrela = loadImage("estrelas-do-mar.png");
  algas = loadImage("algas-marinhas (1).png");
  algas1 = loadImage("algas-marinhas (3).png");
  algas2 = loadImage("algas-marinhas (2).png");
  pedra = loadImage("pedra.png");
  concha = loadImage("concha.png");
  bau = loadImage("bau-de-tesouro.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  
  for(let i = 0; i < 50; i++){
    bolhas[i] = [];
    bolhas[i][0] = random(width);
    bolhas[i][1] = random(width + 10);
    bolhas[i][2] = random(1, 5);
    bolhas[i][3] = random(100, 120);

    
  }
  
  for(let i = 0; i < 10; i++){
    dinamicos[i] = [];
    //Imagem do peixe
    dinamicos[i][0] = peixes[i];
    //alt ou y 
    dinamicos[i][1] = random(height);
    //Posi ou posição no eixo X
    dinamicos[i][2] = random(-50,-350);
    //Iniciopeixe
    dinamicos[i][3] = random(height - 200);
    //amplitude
    dinamicos[i][4] = random(5, 30);
    //Velocidade
    dinamicos[i][5] = random(2.5, 1.0);
    //periodo
    dinamicos[i][6] = random(0.07, 0.01);
    
    if (i == 7){
      dinamicos[i][5] = random(2,4);
      //Posi ou posição no eixo X
      dinamicos[i][2] = random(-500,-700);
    }
    
    if(i == 9){
      //Posi ou posição no eixo X
      dinamicos[i][2] = random(-1000,-700);
      //Iniciopeixe
      dinamicos[i][3] = random(height - 200);
    }
    
    
  }

  
}


function draw() {
  background(0, 70, 150);
  
  
  //Bolhas
  for(let i = 0; i < 50; i++){

    let vel = map(bolhas[i][2], 1, 5, 3, 8);
    let tam = map(bolhas[i][2], 1, 5, 10, 20);
    noStroke()
    
    fill(255, 255, 255, bolhas[i][3])
    circle(bolhas[i][0], bolhas[i][1], tam);
    
    bolhas[i][1] -=vel;
    
    if(bolhas[i][1] < 0){
      bolhas[i][1] = random(width + 40, width + 10);
      bolhas[i][0] = random(width);
    }
  }
  
  //Areia
  strokeWeight(2.5);
  stroke(0, 0, 60);
  fill(195, 172, 135);
  
  
  //Plantas
  image(bau, width * 0.1, height * 0.75, 100 , 100);
  image(algas, width * 0.9, height * 0.8, 75 , 75);
  image(coral, width * 0.75, height * 0.85, 60, 60);
  image(algas2, width * 0.45, height * 0.75, 70, 70);
  image(algas, width * 0.35, height * 0.87, 75 , 75);
  image(coral, width * 0.23, height * 0.92, 60, 60);
  image(algas1, width * 0.25, height * 0.8, 55, 55);
  image(estrela, width * 0.47, height * 0.90, 50, 50);
  image(algas2, width * 0.55, height * 0.82, 70, 70);
  image(pedra, width * 0.001, height * 0.89, 90, 90);
  image(pedra, width * 0.90, height * 0.8, 90, 90);
  image(concha, width * 0.7, height * 0.87, 30, 30);
  
  
  //Dinâmicos
  for(let i = 0; i < 10; i++){
    
        
    peixinho1(dinamicos[i][1], dinamicos[i][2], dinamicos[i][3], dinamicos[i][0], dinamicos[i][4], dinamicos[i][6]);
    
    
    
    dinamicos[i][2] += dinamicos[i][5];
    
    if (dinamicos[i][2] > width + 100){
      //Posi ou posição no eixo X
      dinamicos[i][2] = random(-100,-200);
      //Iniciopeixe
      dinamicos[i][3] = random(height - 150);
      //Velocidade
      dinamicos[i][5] = random(2.5, 1.0);
      //periodo
      dinamicos[i][6] = random(0.07, 0.01);
      
      if (i == 7){
        dinamicos[i][5] = random(2,4);
        //Posi ou posição no eixo X
      dinamicos[i][2] = random(-800, -1000);
      }
      
      if(i == 9){
      //Posi ou posição no eixo X
      dinamicos[i][2] = random(-1000,-700);
        //Iniciopeixe
      dinamicos[i][3] = random(height - 200);
    }
    
    }
    

  }
  
 
  
}



function peixinho1(alt, posi, inicioPeixe, peixe, ampli, vel){
  //Posicionamento do peixe na tela
  alt =  ampli * cos(posi * vel) + inicioPeixe;
  image(peixe,posi, alt);
  
}


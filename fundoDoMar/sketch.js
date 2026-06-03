// VER UMA TRILHA SONORA https://www.epidemicsound.com/sound-effects/categories/water/wave/?utm_source=google&utm_medium=paidsearch&utm_campaign=23377475439&utm_term=ocean%20sounds%20download&gad_source=1&gad_campaignid=23377475439&gbraid=0AAAAADk_3KkdjWStUG-Kba7YexeF9xkP5&gclid=Cj0KCQjw_vnQBhCxARIsADcZyxLqDAf6eG3panAC7IMoB9KVmOZ4tcfXglxtADiC3YewVlBAYfkKsUsaAux4EALw_wcB

let ampli = 50, freq = 20, x = 0, y = 0;
let alt, posi = 0, inicioPeixe;
let dinamicos = []; 
let estatico = [], imagemEstaticas = [];
let peixes = [];
let bolhas = [];
let fundo = document.getElementById("fundo");

let quantidadePlantas = 20; 


function preload(){
  //Elementos dinâmicos
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
  peixes[10] = loadImage("peixe.png");
  peixes[11] = loadImage("baiacu.png");
  peixes[12] = loadImage("peixe-1.png");
  peixes[13] = loadImage("peixe-2.png");
  peixes[14] = loadImage("peixe-gato.png");
  peixes[15] = loadImage("peixe-palhaco.png");
  
  //Elementos estáticos
  coral = loadImage("coral.png");
  estrela = loadImage("estrelas-do-mar.png");
  algas = loadImage("algas-marinhas (1).png");
  algas1 = loadImage("algas-marinhas (3).png");
  algas2 = loadImage("algas-marinhas (2).png");
  pedra = loadImage("pedra.png");
  concha = loadImage("concha.png");
  bau = loadImage("bau-de-tesouro.png");
  castelo = loadImage("castelo-de-areia.png");

  // Bonequinho 
  submarino = loadImage("SUBMARINO.png");
  

}

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  
  quantidadePlantas = floor(width * 0.015); 
  
  for(let i = 0; i < 50; i++){
    bolhas[i] = [];
    bolhas[i][0] = random(width);
    bolhas[i][1] = random(width + 10);
    bolhas[i][2] = random(1, 5);
    bolhas[i][3] = random(100, 120);
  }
  
  let p = 0;
  for(let i = 0; i < 10; i++){
    dinamicos[p] = [];
    dinamicos[p][0] = peixes[p];
    dinamicos[p][1] = random(height);
    dinamicos[p][2] = random(-50,-350);
    dinamicos[p][3] = random(height - 200);
    dinamicos[p][4] = random(5, 30);
    dinamicos[p][5] = random(2.5, 1.0);
    dinamicos[p][6] = random(0.07, 0.01);
    
    if (p == 7){
      dinamicos[p][5] = random(2,4);
      dinamicos[p][2] = random(-500,-700);
    }
    
    if(i == 9){
      dinamicos[p][2] = random(-1000,-700);
      dinamicos[p][3] = random(height - 200);
    } 
    p++;
    if (p > 15){
      p = 0;
    }
  }

  imagemEstaticas[0] = [algas1, 60, 60];
  imagemEstaticas[1] = [coral, 100, 100];
  imagemEstaticas[2] = [algas, 75, 75];
  imagemEstaticas[3] = [coral, 60, 60];
  imagemEstaticas[4] = [algas2, 70, 70];
  imagemEstaticas[5] = [pedra, 90, 90];
  imagemEstaticas[6] = [concha, 30, 30];
  imagemEstaticas[7] = [estrela, 50,50];
  imagemEstaticas[8] = [algas, 75, 75];
  imagemEstaticas[9] = [algas1, 50, 50];
  

  let num = 0;
  for (let i = 0; i < quantidadePlantas; i++){
    estatico[i] = [];
    
    estatico[i][0] = random(0.01, 0.95) * width; 
    estatico[i][1] = random(0.75, 0.92) * height; 
    
    estatico[i][2] = imagemEstaticas[num][0];
    estatico[i][3] = imagemEstaticas[num][1];
    estatico[i][4] = imagemEstaticas[num][2];

    num++;
    if (num > 9){
      num = 0;
    }
  }

}

function draw() {
  background(0, 70, 150);
  
  //Bolhas
  for(let i = 0; i < 50; i++){
    let vel = map(bolhas[i][2], 1, 5, 3, 8);
    let tam = map(bolhas[i][2], 1, 5, 10, 20);
    noStroke();
    
    fill(255, 255, 255, bolhas[i][3]);
    circle(bolhas[i][0], bolhas[i][1], tam);
    
    bolhas[i][1] -= vel;
    
    if(bolhas[i][1] < 0){
      bolhas[i][1] = random(width + 40, width + 10);
      bolhas[i][0] = random(width);
    }
  }
  
  //Areia
  strokeWeight(2.5);
  stroke(0, 0, 60);
  fill(195, 172, 135);
  rect(-10, height * 0.76, width + 10, height * 0.35);
  
  //Elementos fixos
  image(castelo, width * 0.80, height * 0.55, 200, 200);
  image(bau, width * 0.1, height * 0.62, 160, 160);
  image(submarino, mouseX - 65, mouseY - 65, 200, 200);
  
  //Gerando plantas
  for(let i = 0; i < quantidadePlantas; i++){
      image(estatico[i][2], estatico[i][0], estatico[i][1], estatico[i][3], estatico[i][4]);
  }
  
  //Gerando Peixes
  for(let i = 0; i < 10; i++){
    peixinho1(dinamicos[i][1], dinamicos[i][2], dinamicos[i][3], dinamicos[i][0], dinamicos[i][4], dinamicos[i][6]);
    
    dinamicos[i][2] += dinamicos[i][5];
    
    if (dinamicos[i][2] > width + 100){
      dinamicos[i][2] = random(-100, -200);
      dinamicos[i][3] = random(height - 150);
      dinamicos[i][5] = random(2.5, 1.0);
      dinamicos[i][6] = random(0.07, 0.01);
      
      if (i == 7){
        dinamicos[i][5] = random(2, 4);
        dinamicos[i][2] = random(-800, -1000);
      }
      
      if(i == 9){
        dinamicos[i][2] = random(-1000, -700);
        dinamicos[i][3] = random(height - 200);
      }
    }
  }
  achouAlgo();
}

//Colocando os peixinhos
function peixinho1(alt, posi, inicioPeixe, peixe, ampli, vel){
  alt = ampli * cos(posi * vel) + inicioPeixe;
  image(peixe, posi, alt);
}


//Mudando cor quando achou algo
function achouAlgo(){
  if (mouseX > width * 0.8 && mouseX < width - (width * 0.1) && mouseY > height * 0.55 && mouseY < height * 0.83){
    fundo.style.backgroundColor = "rgba(47, 126, 216, 0.8)";
  }else if (mouseX > width * 0.1 && mouseX < width * 0.4 && mouseY > height * 0.62 && mouseY < height * 0.82){
    fundo.style.backgroundColor = "rgba(47, 216, 191, 0.8)";
  }else{
    fundo.style.backgroundColor = "rgb(207, 207, 207)";
  }
}

//Direcionamento de tela
function mouseClicked(){
    if (mouseX > width * 0.8 && mouseX < width - (width * 0.1) && mouseY > height * 0.55 && mouseY < height * 0.83){
      window.location.href = "/meiaNoite/index.html";
    }


    if (mouseX > width * 0.1 && mouseX < width * 0.4 && mouseY > height * 0.62 && mouseY < height * 0.82){
      window.location.href = "/pixelArt/index.html";
    }
}
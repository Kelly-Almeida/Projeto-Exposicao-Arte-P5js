//Variáveis
let podeClicar = true;
let vel = [];
let lua, rep = 0;
let meiaNoite = false;

function preload(){
  //Imagem da noite
  lua = loadImage("lua.png");
  casaNoite = loadImage("casaNoite.png");
  arbusto = loadImage("arbustos.png");
  
  //Imagem do dia
  sol = loadImage("sol.png");
  casa = loadImage("casa 1.png");
  nuvem = loadImage("nuvem.png");
  nuvem1= loadImage("nuvem (1).png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
    //Teste de horário
  if (meiaNoite){
    rep = noite(rep);
  }else{
    rep = dia(rep);
  }
  
}

function noite(J){
  //estrelas
  if (J === 0){
    background(0, 0, 55);
    for(let i = 0; i < 150; i++){
      stroke(255, 255, 255);
      strokeWeight(random(2,8))
      point(random(width), random(height))
    }
    J++;
  }
  //Chão
  strokeWeight(8)
  stroke(0,0,0);
  fill(118, 177, 112);
  rect(-20, height*0.85, width + 30, height * 0.2);
  
  //Elementos da noite
  image(lua, width *0.72, height * 0.12, width*0.12, width *0.12)
  image(casaNoite, width * 0.65, height * 0.45, width *0.3, width * 0.3);
  image(arbusto, width * 0.1, height* 0.75, width * 0.12, width*0.12); 
  image(arbusto, width * 0.4, height* 0.8, width * 0.12, width*0.12);

  //FALTA
  //image(lobinho)
  return J;
}


function dia(J){
  J = 0
  background(0, 128, 255);
  //Ambiente
  strokeWeight(6)
  stroke(0,0,0);
  fill(118, 177, 112);
  rect(-20, height*0.85, width + 30, height * 0.2);
  image(arbusto, width * 0.1, height* 0.75, width * 0.12, width*0.12); 
  image(arbusto, width * 0.4, height* 0.8, width * 0.12, width*0.12);
  
  image(nuvem, width * 0.1, height* 0.1, width * 0.12, width*0.12);
  image(nuvem1, width * 0.4, height* 0.2, width * 0.12, width*0.12);
  image(sol, width *0.7, height * 0.1, width*0.15, width *0.15);
  image(casa, width * 0.65, height * 0.45, width *0.3, width * 0.3);
  
  return J;
}

function mousePressed() {
    //Parte de trasição de cenário e espera do gif
    //teste de se já passou o tempo
    if(!podeClicar){
        return;
    }
    //Inverte para que ver como se diverte
    meiaNoite =!meiaNoite;

    //Teste para verificar se apertou na lua/sol
    if(mouseY > height * 0.1 && mouseY < (height - height *0.2) && mouseX > width * 0.7 && mouseX <(width - width *0.15) && meiaNoite){
        //desabilita a função de click para vir o lobinho
        podeClicar = false;

        //time out TEMPO INDETERMINADO AINDA
        setTimeout(() =>{
            podeClicar = true;
        }, 3000);
    
  }
}
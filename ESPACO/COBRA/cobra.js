let corpo = [];
let x = 40, y = 660, fase = 1, diametro = 80, velocidade = 5, macaX = 160, macaY = 300, tam = 80;
let morreu = false;
let maca, botao1, botao2, alvoY, comer, comeu = false, mold, cor;

function preload() {
  maca = loadImage("imgcobra/maca.png");
  comer = loadSound("imgcobra/comeu.mp3");
  botao1 = loadImage("imgcobra/globo.png");
  botao2 = loadImage("imgcobra/folha.png");
  cobra = loadImage("imgcobra/cobraF.png");
  perdeu = loadSound("imgcobra/perdeu.mp3");
}

function setup() {
  mold = createCanvas(400, 700);
  mold.parent("moldura");
  colorMode(HSB);
  noStroke();

  alvoY = y - diametro;
}

function draw() {
  if (morreu == true) {
    background(0);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Morreu de bucho cheio...", width / 2, height / 2);

    fill(255);
    textAlign(CENTER, CENTER);
    text("Escolha um abaixo:", width / 2, height / 2 + 40);

    image(cobra, 130, 200, 120, 120);
    image(botao1, 250, 400, 100, 100);
    image(botao2, 80, 430, 50, 50);

    return;
  }

  background(0);

  image(maca, macaX, macaY, tam, tam);

  if (x >= macaX && x <= macaX + tam && y >= macaY && y <= macaY + tam) {
    if (comeu == false) {
      comer.play();
      comeu = true;
    }
  }

  if (fase == 1) {
    x += velocidade;

    if (x >= 360) fase = 2;
  } else if (fase == 2) {
    y -= velocidade;

    if (y <= alvoY) {
      y = alvoY;

      alvoY -= diametro;

      if (alvoY < 0) morreu = true;

      fase = 3;
    }
  } else if (fase == 3) {
    x -= velocidade;

    if (x <= 40) fase = 4;
  } else if (fase == 4) {
    y -= velocidade;

    if (y <= alvoY) {
      y = alvoY;

      alvoY -= diametro;

      if (alvoY < 0) morreu = true;

      fase = 1;
    }
  }

  corpo.push([]); //IA
  corpo[corpo.length - 1][0] = x; //IA
  corpo[corpo.length - 1][1] = y; //IA

  for (let i = 0; i < corpo.length; i++) { //pesquisei sobre .lenght
    cor = map(i, 0, corpo.length, 0, 360);
    fill(cor, 100, 100);
    circle(corpo[i][0], corpo[i][1], diametro);
  }

  if (morreu == false) {
    fill(255);
    circle(x - 15, y - 12, 15);
    circle(x + 15, y - 12, 15);
  } else {
    perdeu.play();
  }
}

function mouseClicked() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 400 && mouseY < 500) {
    window.location.href = "BALADA/balada.html";
  }

  if (mouseX > 80 && mouseX < 130 && mouseY > 430 && mouseY < 480) {
    window.location.href = "/PixelArt/index.html";
  }
}

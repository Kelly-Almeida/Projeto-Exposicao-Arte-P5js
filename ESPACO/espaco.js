let estrelas = [];
let foguete, terra, marte, saturno, lua, naveAlien, satelite;
let terraX, terraY, saturnoX, saturnoY, marteX, marteY, fogueteX, fogueteY, tamanhoFoguete, inicioX, fimX, alienX, alienY;

let terraTam = 250;
let marteTam = 200;
let saturnoTam = 250;
let luaTam = 120;
let sateliteTam = 80;

function preload() {
  foguete = loadImage("imgespacos/foguete.png");
  terra = loadImage("imgespacos/terra.png");
  marte = loadImage("imgespacos/marte.png");
  saturno = loadImage("imgespacos/saturno.png");
  lua = loadImage("imgespacos/lua.gif");
  naveAlien = loadImage("imgespacos/nave.png");
  satelite = loadImage("imgespacos/satelite.png");
  musica = loadSound("imgespacos/interstelar.mp3");
  escolha = loadImage("imgespacos/escolha.png");
}

function foguetao() {
  terraX = terraTam / 2;
  terraY = height - terraTam / 2;
  fogueteX = terraX;
  fogueteY = terraY;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  inicioX = terraTam / 3;
  fimX = width;

  foguetao();

  alienX = random([0, width]);
  alienY = random(height * 0.2, height * 0.8);

  if (alienX == 0) {
    alienX = -100;
  } else {
    alienX = width + 100;
  }

  for (let i = 0; i < 80; i++) {
    estrelas[i] = [];
    estrelas[i][0] = random(width);
    estrelas[i][1] = random(height);
    estrelas[i][2] = random(1, 5);
  }
}

function draw() {
  background(0);
  image(escolha, width / 2, 80, 300, 200);

  if (!musica.isPlaying()) {
    musica.loop();
  }

  for (let i = 0; i < estrelas.length; i++) {
    let vel = map(estrelas[i][2], 1, 5, 2, 8);
    let tam = map(estrelas[i][2], 1, 5, 5, 30);
    let esp = map(estrelas[i][2], 1, 5, 1, 3);

    strokeWeight(esp);
    stroke(255);

    line(estrelas[i][0], estrelas[i][1], estrelas[i][0] + tam, estrelas[i][1] - tam / 2);

    estrelas[i][0] -= vel;
    estrelas[i][1] += vel / 2;

    if (estrelas[i][0] < -50 || estrelas[i][1] > height + 50) {
      if (random() < 0.5) {
        estrelas[i][0] = random(width, width + 200);
        estrelas[i][1] = random(height);
      } else {
        estrelas[i][0] = random(width);
        estrelas[i][1] = random(-200, 0);
      }
    }
  }

  imageMode(CENTER);

  terraX = terraTam / 2;
  terraY = height - terraTam / 2;
  saturnoX = width * 0.85;
  saturnoY = height * 0.7;

  image(lua, terraX, terraY - terraTam * 0.8, luaTam, luaTam);
  image(terra, terraX, terraY, terraTam, terraTam);
  image(marte, width / 2, height / 2, marteTam, marteTam);
  image(saturno, saturnoX, saturnoY, saturnoTam, saturnoTam);
  image(satelite, saturnoX + saturnoTam * 0.1, saturnoY - saturnoTam, sateliteTam, sateliteTam);
  image(naveAlien, alienX, alienY, 120, 120);

  alienX += 4;

  if (alienX > width + 100) {
    alienX = -100;
    alienY = random(height * 0.2, height * 0.8);
  }

  if (alienX < -100) {
    alienX = width + 100;
    alienY = random(height * 0.2, height * 0.8);
  }

  tamanhoFoguete = map(fogueteX, inicioX, fimX, 10, 300);

  image(foguete, fogueteX, fogueteY, tamanhoFoguete, tamanhoFoguete);

  fogueteX += width * 0.0007;
  fogueteY -= height * 0.0007;
}

function mouseClicked() {
  userStartAudio();

  marteX = width / 2;
  marteY = height / 2;
  saturnoX = width * 0.85;
  saturnoY = height * 0.7;

  if (mouseX > marteX - marteTam / 2 && mouseX < marteX + marteTam / 2 && mouseY > marteY - marteTam / 2 && mouseY < marteY + marteTam / 2) {
    window.location.href = "/fundoDoMar/index.html";
  }

  if (mouseX > saturnoX - saturnoTam / 2 && mouseX < saturnoX + saturnoTam / 2 && mouseY > saturnoY - saturnoTam / 2 && mouseY < saturnoY + saturnoTam / 2) {
    window.location.href = "COBRA/cobra.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

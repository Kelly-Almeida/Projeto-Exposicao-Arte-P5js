let chao, globo;
let yasdance, kellydance, persodance, yas, kelly, perso, yas2, kelly2, perso2, yasX, kellyX, persoX, yasFinal, persoFinal, kellyFinal, y;
let fase = 1;
let i = 0;

function preload() {
  chao = loadImage("imgbalada/chao.avif");
  globo = loadImage("imgbalada/globo.png");
  yasdance = loadImage("imgbalada/yasdance.gif");
  kellydance = loadImage("imgbalada/kellydance.gif");
  persodance = loadImage("imgbalada/persodance.gif");
  yas = loadImage("imgbalada/yasandando.gif");
  kelly = loadImage("imgbalada/kellyandando.gif");
  perso = loadImage("imgbalada/persoandando.gif");
  yas2 = loadImage("imgbalada/yas.gif");
  kelly2 = loadImage("imgbalada/kelly.gif");
  perso2 = loadImage("imgbalada/perso.gif");
  musica = loadSound("imgbalada/musica.mp3");
  andar = loadSound("imgbalada/andando.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  yasX = -250;
  kellyX = -450;
  persoX = -650;
}

function draw() {
  background(chao);

  if ((fase == 1 || fase == 2) && andar.isPlaying() == false) {
    andar.loop();
  }

  if (fase >= 3) {
    andar.stop();
  }

  for (let i = 0; i < 20; i++) {
    strokeWeight(4);
    stroke(random(100, 255), random(0, 255), random(100, 255), 180);
    line(random(width), random(height), random(width), random(height));
  }

  image(globo, width / 2 - 150 / 2, 0, 150, 150);

  y = height / 2 + 50;
  yasFinal = width / 2 - 320;
  persoFinal = width / 2 - 50;
  kellyFinal = width / 2 + 180;

  if (fase == 1) {
    if (yasX < yasFinal) {
      image(yas, yasX, y, 250, 250);
      yasX += 4;
    } else {
      image(yas2, yasFinal, y, 250, 250);
    }

    if (kellyX < kellyFinal) {
      image(kelly, kellyX, y, 250, 250);
      kellyX += 4;
    } else {
      image(kelly2, kellyFinal, y, 250, 250);
    }

    if (yasX >= yasFinal && kellyX >= kellyFinal) {
      fase = 2;
    }
  } else if (fase == 2) {
    image(yas2, yasFinal, y, 250, 250);
    image(kelly2, kellyFinal, y, 250, 250);

    if (persoX < persoFinal) {
      image(perso, persoX, y + 20, 220, 220);
      persoX += 4;
    } else {
      image(perso2, persoFinal, y + 20, 220, 220);
      i = 0;
      fase = 3;
    }
  } else if (fase == 3) {
    image(yas2, yasFinal, y, 250, 250);
    image(perso2, persoFinal, y + 20, 220, 220);
    image(kelly2, kellyFinal, y, 250, 250);
    i++;

    if (i >= 60) {
      fase = 4;
    }
  } else if (fase == 4) {
    if (musica.isPlaying() == false) {
      musica.loop();
    }

    image(yasdance, yasFinal, y, 250, 250);
    image(persodance, persoFinal, y + 20, 220, 220);
    image(kellydance, kellyFinal, y, 250, 250);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

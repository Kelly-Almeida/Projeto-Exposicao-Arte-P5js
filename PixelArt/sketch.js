let pint = 0;
let cor = [];
function setup() {
  
  frameRate(200);
  createCanvas(435, 435);
  

  pint = 0
  noStroke();
  // Core divonicas
  let azul = [148, 235, 255];
  let preto = [0,0,0];
  let creme = [246, 248, 234];
  let cinza = [229, 231, 230];
  let laranja = [246, 157, 63];
  let marrom = [152, 113, 108];
  let marrom_escuro = [117, 79, 78];
  let verde_claro =[54, 128, 5];
  let verde_escuro = [40, 97, 9];
  let azul_celeste = [56, 187, 233];
  let azul_escuro =[69, 167, 237];
  let terra = [113, 55, 18]

  // Estrutura das linhas (completando de 0 a 29)
  cor[0] = Array(29).fill(azul);
  cor[1] = Array(29).fill(azul);
  cor[2] = Array(29).fill(azul);
  cor[3] = [
    azul, azul,preto, preto,azul, azul, azul, azul, azul, azul, azul,azul, azul, azul, azul, azul, azul, azul, azul, azul, azul, azul, azul, azul,preto, preto,azul, azul, azul];
  cor[4] = [
    azul, preto, creme, cinza, preto,azul, azul, azul, azul, azul, azul,azul, azul, azul, azul, azul, azul, azul, azul, azul, azul, azul, azul,preto,creme,cinza, preto,azul, azul];
  cor[5] = [
    azul, azul, preto, preto, azul, azul, azul, azul, azul, azul, azul, azul, azul, preto, preto, azul, azul, azul, azul, azul, azul, azul, azul, azul, preto, preto, azul, azul, azul];
  cor[6] = [
    azul, azul, azul, azul, azul, azul, preto, azul, azul, azul, azul, azul, preto, laranja, laranja, preto, azul, azul, azul, azul, preto, azul, azul, azul, azul, azul, azul, azul, azul];
  cor[7] = [
    azul, azul, azul, azul, azul,preto,cinza,preto,azul, azul, azul, azul,preto,laranja, laranja,preto,azul, azul, azul,preto,cinza,preto,azul, azul, azul, azul, azul, azul, azul];
  cor[8] = [
    azul, azul, azul, azul, preto, creme, cinza, cinza, preto, azul, azul, azul, azul, preto, preto, azul, azul, azul, preto, creme, cinza, cinza, preto, azul, azul, azul, azul, azul, azul];
  cor[9] = [
    azul, azul, azul, preto, creme, creme, creme, cinza, cinza, preto, azul, azul, azul, azul, azul, azul, azul, preto, creme, creme, creme, cinza, cinza, preto, azul, azul, azul, azul, azul];
  cor[10] = [
    azul, azul, preto, marrom, creme, creme, creme, creme, cinza, marrom, preto, azul, azul, azul, azul, azul, preto, marrom, creme, creme, creme, creme, cinza, marrom, preto, azul, azul, azul, azul];
  cor[11] = [
    azul, preto, marrom, creme, marrom, creme, marrom_escuro, creme, marrom, cinza, marrom, preto, azul, azul, azul, preto, marrom, creme, marrom, creme, marrom_escuro, creme, marrom, cinza, marrom, preto, azul, azul, azul];
  cor[12] = [
    preto, marrom, marrom, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom, preto, azul, preto, marrom, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom, marrom, preto, azul, azul];
  cor[13] = [
    marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom_escuro, marrom, marrom, marrom_escuro, preto, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom, marrom, preto, azul];
  cor[14] = [
    marrom, marrom_escuro, marrom, marrom, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom_escuro, marrom, marrom_escuro, marrom, preto, marrom, marrom_escuro, marrom, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, marrom_escuro, marrom, preto];
  cor[15] = [
    preto, preto, preto, preto, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom_escuro, marrom_escuro, marrom, marrom, marrom, preto, marrom_escuro, marrom, marrom, marrom_escuro, marrom, marrom, marrom, preto, preto, preto, preto, preto, preto];
  cor[16] = [
    verde_claro, verde_escuro, verde_escuro, verde_claro, preto, preto, preto, marrom_escuro, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom, marrom, preto, marrom, marrom, marrom, marrom, marrom_escuro, preto, verde_escuro, verde_escuro, verde_claro, verde_claro, verde_escuro, verde_escuro];
  cor[17] = [
    verde_claro, verde_claro, verde_claro, verde_escuro, verde_claro, verde_claro, verde_escuro, preto, marrom, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom_escuro, marrom_escuro, preto, marrom, marrom, marrom, preto, verde_escuro, verde_claro, verde_claro, verde_claro, verde_escuro, verde_claro, verde_claro];
  cor[18] = [
    verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_escuro, verde_claro, verde_claro, preto, preto, marrom, marrom, marrom, marrom, marrom_escuro, marrom, marrom_escuro, marrom_escuro, preto, marrom, preto, verde_escuro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_escuro, verde_escuro];
  cor[19] = [
    verde_claro, verde_escuro, verde_claro, verde_escuro, verde_claro, verde_claro, verde_escuro, verde_escuro, verde_escuro, verde_claro, preto, preto, preto, preto, preto, preto, preto, preto, preto, preto, preto, verde_escuro, verde_claro, verde_claro, verde_escuro, verde_escuro, verde_claro, verde_claro, verde_claro];
  cor[20] = [
    verde_claro,
    verde_claro,
    verde_escuro,
    verde_claro,
    verde_claro,
    verde_claro,
    verde_escuro,
    verde_escuro,
    verde_claro,
    verde_escuro,
    preto,
    azul_escuro,
    azul_celeste,
    azul_escuro,
    azul_celeste,
    azul_celeste,
    azul_celeste,
    azul_celeste,
    azul_escuro,
    preto,
    verde_escuro,
    verde_claro,
    verde_escuro,
    verde_escuro,
    verde_claro,
    verde_escuro,
    verde_escuro,
    verde_claro,
    verde_escuro];
  cor[21] = [
    verde_escuro, verde_escuro, verde_claro, verde_escuro, verde_escuro, verde_escuro, verde_escuro, verde_claro, verde_escuro, verde_escuro, verde_escuro, preto, azul_celeste, azul_celeste, azul_escuro, azul_escuro, azul_celeste, azul_celeste, preto, verde_escuro, verde_escuro, verde_escuro, verde_escuro, verde_claro, verde_escuro, verde_claro, verde_claro, verde_claro, verde_escuro];
  cor[22] = [
    verde_claro, verde_escuro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, preto, preto, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_escuro, preto, preto, preto, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_claro, verde_escuro, verde_claro];
  cor[23] = [
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_escuro, 
    preto, 
    preto, 
    terra, 
    preto, 
    azul_celeste, 
    azul_celeste, 
    azul_celeste, 
    azul_celeste, 
    azul_celeste, 
    azul_escuro, 
    preto, 
    terra, 
    terra, 
    preto, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro, 
    verde_claro];
  cor[24] = [
    verde_claro, verde_claro, verde_escuro, verde_claro, verde_claro, verde_claro, verde_claro, preto, terra, terra, preto, azul_celeste, azul_escuro, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, preto, terra, terra, preto, verde_claro, verde_escuro, verde_claro, verde_claro, verde_claro, verde_claro];
  cor[25] = [
    verde_escuro, 
  verde_escuro, 
  verde_claro, 
  verde_escuro, 
  verde_escuro, 
  verde_claro, 
  preto, 
  terra, 
  terra, 
  preto, 
  azul_escuro, 
  azul_celeste, 
  azul_escuro, 
  azul_celeste, 
  azul_escuro, 
  azul_celeste, 
  azul_escuro, 
  azul_celeste, 
  azul_escuro, 
  azul_celeste, 
  preto, 
  terra, 
  terra, 
  preto, 
  preto, 
  preto, 
  verde_claro, 
  verde_claro, 
  verde_claro];
  cor[26] = [
    verde_claro, 
  verde_escuro, 
  verde_escuro, 
  verde_claro, 
  verde_claro, 
  preto, 
  terra, 
  terra, 
  preto, 
  azul_escuro, 
  azul_escuro, 
  azul_escuro, 
  azul_escuro, 
  azul_escuro, 
  azul_escuro, 
  azul_escuro, 
  azul_celeste, 
  azul_celeste, 
  azul_celeste, 
  azul_celeste, 
  azul_celeste, 
  preto, 
  terra, 
  terra, 
  terra, 
  terra, 
  preto, 
  verde_escuro, 
  verde_claro, 
  verde_escuro];
  cor[27] = [
    verde_escuro, verde_claro, verde_claro,preto, preto,terra, terra, preto, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_escuro, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, preto, preto,terra,terra, terra, preto,verde_claro];
  cor[28] = [
    verde_escuro, preto, preto, terra, terra, terra, preto, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, preto, preto, terra, terra, preto];
  cor[29] = [
    preto, terra, terra, terra, terra, preto, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, azul_celeste, preto, terra, preto];
}

function draw() {
  
  let i = floor(pint / 29); // Linha atual
  let j = pint % 29;        // Coluna atual

  if (i < 30 && cor[i] && cor[i][j]) {
    fill(cor[i][j][0], cor[i][j][1], cor[i][j][2]);
    square(j * 15, i * 15, 15);
  }

  
  if (pint < 870) { 
    pint++;
  }}
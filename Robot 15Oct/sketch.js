
var bgRed = 70;
var bgGreen = 0;
var bgBlue = 70;

var canvasx = 800;
var canvasy = 1000;

var antenna = 77;
var coneAntenna = 27;
var head = 200;
var neck = 200;
var pupil = 255;
var eyeball = 0;
var mainbody = 200;
var stomach = 51;
var armquadRed = 0;
var armquadGreen = 125;
var armquadBlue = 125;
var handRed = 0;
var handGreen = 170;
var handBlue = 125;
var leg = 51;
var feet = 51;
var mouth = 40;


var antennax = 150;
var antennay = 50;
var antennaw = 20;
var antennah = 20;

var coneAntennax1 = 140;
var coneAntennay1 = 80;
var coneAntennax2 = 160;
var coneAntennay2 = 80;
var coneAntennax3 = 150;
var coneAntennay3 = 60;

var strokex = 127;
var strokey = 42;
var strokez =8;

var headx = 110;
var heady = 80;
var headw = 80;
var headh = 50;

var pupilLx = 130
var pupilRx = 170
var pupily = 100
var pupilw = 20
var pupilh = 20

var eyeballLx = 127
var eyeballRx = 167
var eyebally = 103
var eyeballw = 10
var eyeballh = 10

var neckx = 145;
var necky = 130;
var neckw = 10;
var neckh = 10;

var maintorsox = 115;
var maintorsoy = 140;
var maintorsow = 70;
var maintorsoh = 80;

var legLx = 130;
var legRx = 155;
var legy = 220;
var legw = 15;
var legh = 30;

var feetLx = 120;
var feetRx = 155;
var feety = 250;
var feetw = 25;
var feeth = 10;

var armx1 = 95; 
var armx2 = 180;
var armx3 = 95;
var armx4 = 160;
var armx5 = 115;
var armx6 = 150;
var armx7 = 115;
var armx8 = 170;

var army1 =186; 
var army2 = 170;
var army3 = 186;
var army4 = 150;
var army5 = 205;
var army6 = 160;
var army7 = 205;
var army8 = 180;

var handLx = 85;
var handRx = 215;
var handy = 175;
var handw = 20;
var handh = 20;

var middletorsox = 125;
var middletorsoy = 150;
var middletorsow = 50;
var middletorsoh = 60;

var mouthx = 140;
var mouthy = 120;
var mouthw = 20;
var mouthh = 5;

function setup() {
  createCanvas(canvasx, canvasy);
  background(bgRed, bgGreen, bgBlue);
}

function draw() {
  fill(antenna);
  ellipse(antennax, antennay, antennaw, antennah);//circle
  
  fill(coneAntenna);
  triangle(coneAntennax1, coneAntennay1,coneAntennax2, coneAntennay2, coneAntennax3, coneAntennay3);//antenna
  
  fill(head);
  stroke(strokex, strokey, strokez);
  rect(headx, heady, headw, headh);//head
  
  noStroke();
  fill(pupil);
  ellipse(pupilLx, pupily, pupilw, pupilh);//pupil
  fill(pupil);
  ellipse(pupilRx, pupily, pupilw, pupilh);//pupil
  
  fill(eyeball);
  ellipse(eyeballLx, eyebally, eyeballw, eyeballh);//eyeball
  fill(eyeball);
  ellipse(eyeballRx, eyebally, eyeballw, eyeballh);//eyeball
  
  fill(neck);
  rect(neckx, necky, neckw, neckh);//neck
  
  fill(mainbody);
  rect(maintorsox, maintorsoy, maintorsow, maintorsoh);//maintorso
  
  fill(leg);
  rect(legLx, legy, legw, legh);//leg
  fill(leg);
  rect(legRx, legy, legw, legh);//leg
  
  fill(feet);
  rect(feetLx, feety, feetw, feeth);//feet
  fill(feet);
  rect(feetRx, feety, feetw, feeth);//feet
  
  fill(armquadRed, armquadGreen, armquadBlue);
  quad(armx1, armx2, armx3, armx4, armx5, armx6, armx7, armx8);//arm
  quad(army1, army2, army3, army4, army5, army6, army7, army8);//arm
  
  fill(handRed, handGreen, handBlue);
  ellipse(handLx, handy, handw, handh);//hand
  ellipse(handRx, handy, handw, handh);//hand
  
  fill(stomach);
  rect(middletorsox, middletorsoy, middletorsow, middletorsoh);//middletorso
  
  fill(mouth);
  rect(mouthx, mouthy, mouthw, mouthh);//mouth
  
}
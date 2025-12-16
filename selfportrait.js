function setup() {
  // Create Canvas of 500 by 500 
  createCanvas(500, 500);
  background(0,255,255);
  fill(210,180,140);

  // Ears
  noStroke();
  ellipse(360,230,40,60);
  ellipse(160,230,40,60);
  
  // Head
  noStroke();
  square(160,140, 200, 20);
  fill(210,180,140);
  noStroke();
  arc(260,300,200,90,10,PI,CHORD);
  
  // Neck
  rect(234,340,60,55);
  
  // Shirt
  fill(255,100,0)
  rect(80,370,360,180,20,20,20,20);
  noStroke();
  fill(210,180,140);
  arc(265,370,95,100,0,PI,CHORD);
  
  // Eyes
  fill(255);
  ellipse(215, 220, 40, 30); // left eye 
  ellipse(300, 220, 40, 30); // right eye
  fill(90, 60, 30); 
  ellipse(215, 220, 22, 22); // l iris
  ellipse(300, 220, 22, 22); // r iris
  
  // Eye brows
  fill(0,0,0)
  rect(200,190, 40,10, 15,30, 10,30);
  rect(280,190, 40,10, 15,30, 10,30);
  
  // Nose
  fill(225, 193, 110)
  triangle(260,200, 250, 270, 280, 270);
  arc(265,270,22,9,0,PI,CHORD);
  
  fill(0,0,0);
  circle(258,263,9);
  circle(268,263,9);
  
  // Mouth
  smooth();
  noStroke();
  fill(260,0,0);
  beginShape();
  vertex(260, 305);
  vertex(240, 295);
  vertex(225, 315);
  vertex(260, 325);
  vertex(295, 315);
  vertex(280, 295);
  endShape();
  
  // Hair shape
  smooth();
  noStroke();
  fill(100,78,2);
  beginShape();
  vertex(160,190);
  vertex(200,150);
  vertex(200,170);
  vertex(240,150);
  vertex(240, 170);
  vertex(285, 150);
  vertex(285, 170);
  vertex(315, 150);
  vertex(315, 170);
  vertex(340, 150);
  vertex(360, 185);
  vertex(370, 140);
  vertex(340, 120);
  vertex(205, 115);
  vertex(150, 140);
  vertex(160, 190);  
  endShape();
}

// Do nothing in draw
function draw() {
}
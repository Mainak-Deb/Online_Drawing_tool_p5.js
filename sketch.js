let slider,d=false;
let x1,y1,c,er=false;
function setup() {
  createCanvas(1530, 770);
  background(255);
  push();
  fill(125);
  rect(0, 0, 1250, 00);
  pop();
  colorMode(HSB);
  slider = createSlider(0, 360, 60);
  slider.position(10, 30);
  slider.style('width', '80px');

  slider1 = createSlider(0, 100, 60);
  slider1.position(120, 30);
  slider1.style('width', '80px');

  slider2 = createSlider(0, 100, 100);
  slider2.position(230, 30);
  slider2.style('width', '80px');
  
  slider3 = createSlider(0, 50, 10);
  slider3.position(330, 30);
  slider3.style('width', '80px');
  
  ac = createButton('All clear');
  ac.position(739, 30);
  ac.mousePressed(changeBG);

  eraser= createButton('Eraser');
  eraser.position(610, 30);
  eraser.mousePressed(changecl);

  background(255);

}
function draw() {

  push();
  textSize(12);
  textAlign(RIGHT);
  text('HUE', 70, 60);
  text('SATURATION', 200, 60);
  text('BRIGHTNESS', 320, 60);
  text('Strokewidth', 400, 60);
  pop();
  
  push();
  let H = slider.value();
  let S = slider1.value();
  let B = slider2.value();
  let wd = slider3.value();


  line(0,100,width,100)
  c = color(H,S,B);
  if(er) {
    c = color(255);
  }
  
  fill(c);
  strokeWeight(4);
  stroke(0);
  rect(450, 10, 55, 55);

  circle(550, 40, wd);

  if(mouseY>100){
    if(d){
      if((x1!=0) ||(y1!=0)){
        stroke(c); // Change the color
        strokeWeight(wd);
        line(x1,y1,mouseX,mouseY)
        
        x1=mouseX,y1=mouseY;
      }
    }
  }
  
  pop();
  
}
function mousePressed() {
   d= true;
 
  if(mouseY>100){
    x1=mouseX;y1=mouseY;
  }
  
  return true;
}
function mouseReleased() {
  d= false;
  if(mouseY>100){
    x1=0;y1=0;
  }
  return false;
}
function changeBG() {
  background(255);
}

function changecl() {
  if(er==false){er=true;}
  else{er=false;}
}


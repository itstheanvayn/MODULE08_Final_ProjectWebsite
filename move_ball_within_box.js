let ball_x = 300;
let ball_y = 200;
let x_speed = 4;
let y_speed = -3;

let width = 600;
let height = 400;
let radius = 50;
let circle_clicked = 0;

function setup() {
   createCanvas(width, height);
}

function draw() {
      if (circle_clicked) {
         return;
      }
      background(0);
      if (ball_x > width || ball_x < 0) {
          x_speed = x_speed * -1;
      }
      if (ball_y > height || ball_y < 0) {
          y_speed = y_speed * -1;
      }
      ball_x = ball_x + x_speed;
      ball_y = ball_y + y_speed;

      stroke(255);
      strokeWeight(4);
      fill(255,0,200);
      ellipse(ball_x, ball_y, radius, radius);

}

function keyPressed() {
  if (circle_clicked == 1) {
      circle_clicked = 0;

size(400, 400, P3D);
noFill();

beginCamera();
camera();
rotateX(-PI/6);
endCamera();

translate(200, 200, 0);
rotateY(PI/3);
box(180);

      return;
  }

  if (keyCode == LEFT_ARROW) {
       question = "KeyCode UP detected";
       x_speed = x_speed + 3;
       y_speed = y_speed - 3;
  } else if (keyCode == RIGHT_ARROW) {
       question = "KeyCode DOWN detected";
       x_speed = x_speed - 3;
       y_speed = y_speed + 3;
  }
  // text(question, width / 3, 80);
}


function mousePressed() {
  if (circle_clicked == 1) {
      circle_clicked = 0;
      return;
  }
  // Calculate distance from mouse click to circle center
  let d = dist(mouseX, mouseY, ball_x, ball_y);

  // -------------------- If click is inside the circle --------------------
  if (d < radius) {
    // The player clicked within the circle's radius
    question = "You clicked the circle! 🎉\n Please press any key or Mouse key to continue with this game!";  // Update message for circle click
    circle_clicked = 1;
    text(question, width / 3, 80);
  } 
  // -------------------- Otherwise --------------------
}

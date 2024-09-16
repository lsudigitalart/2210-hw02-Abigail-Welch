function setup() {
    createCanvas (400, 269);
    angleMode (DEGREES);
  
 
  }
  function draw() {
    background (1,10,77,255);
    stroke (0);
    strokeWeight (7)
    text (mouseX, 100, 40)
    text (mouseY, 120, 40)
    



    //background
    
    fill(1,10,77,255);
    ellipse(340,16, 320,280);
    
    fill(0);
    ellipse(285, 222, 370,340);

    fill(221,197,188);
    ellipse(390, 255, 50, 40);
    
    fill(0);
    ellipse(370, 240, 50, 40);
    

    fill (221,197,188);
    noStroke();
    ellipse(30, 140, 300, 400);

    fill (221,197,188);
    noStroke();
    ellipse(31, 76, 300, 400);

    fill (221,197,188);
    noStroke();
    ellipse(188, 206, 63, 60);

    fill (221,197,188);
    noStroke();
    ellipse(188, 212, 114, 100);
    
    fill (221, 197, 188);
    noStroke();
    ellipse (180, 300, 312, 180);

    fill (221, 197, 188);
    noStroke();

    ellipse (207, 159, 150, 120);

    fill (221, 197, 188);
    noStroke ();
    triangle (265, 196, 239, 210, 273, 230)

    fill (221, 197, 188);
    noStroke ();
    triangle (276, 192, 266, 200, 278, 205)

    noFill ();
    strokeWeight(11);
    stroke(0);
    bezier (262, 24, 300, 22, 330, 28, 385, 45);

    noFill ();
    strokeWeight(11);
    stroke(0);
    bezier (243, 15, 305, 16, 354, 20, 395, 28);

    noFill ();
    strokeWeight(11);
    stroke(0);
    bezier (286, 1, 329, 2, 355, 4, 395, 3);

    fill (221, 197, 188);
    strokeWeight(1);
    stroke(0);
    bezier (281, 186, 285, 201, 289, 208, 295, 209);

    noFill ();
    strokeWeight(4);
    stroke(0);
    bezier (274, 189, 272, 193, 265, 197, 258, 199);
    
    //head shape
    noFill ();
    strokeWeight(7);
    stroke(0);
    bezier (341, 268, 188, 186, 167, 160, 197, 177);

    noFill ();
    strokeWeight(7);
    stroke(0);
    bezier (191, 177, 157, 146, 213, 97, 167, 0);

    fill (221, 197, 188)
    noStroke ();
    ellipse (211, 159, 50, 50)

    noFill ();
    strokeWeight(4);
    stroke(0);
    bezier (194, 117, 251, 109, 253, 153, 245, 178);

    //face
    
    strokeWeight (8);
    stroke (0);
    line (-3, 55, 29, 55)

    fill (0);
    stroke (0);
    triangle (133, 102, 121, 123, 55, 100 );

    fill (0);
    stroke (0);
    triangle (59, 106, 29, 100, -1, 127);

    noFill ();
    strokeWeight(4);
    stroke(0);
    bezier (62, 108, 72, 112, 97, 122, 121, 124);

    noFill ();
    strokeWeight(8);
    stroke(221, 197, 188);
    bezier (100, 122, 121, 120, 131, 112, 137, 102);
    
    noFill ();
    strokeWeight(8);
    stroke(221, 197, 188);
    bezier (32, 96, 19, 108, 5, 117, -6, 122);

    // eye
    fill (225);
    noStroke ();
    ellipse (90, 222, 70, 50)

    fill (163,162,170,255);
    strokeWeight (4)
    stroke (0);
    ellipse (119, 222, 30, 50)

    fill (0);
    noStroke ();
    ellipse (129, 207, 10, 50)

    fill (0);
    strokeWeight (4);
    stroke (0);
    bezier (25, 204, 53, 216, 79, 214, 111, 199);

    fill (0);
    strokeWeight (4);
    stroke (0);
    bezier (111, 199, 129, 205, 143, 206, 158, 192)

    fill (0);
    strokeWeight (4);
    stroke (0);
    bezier (157, 186, 141, 190, 113, 194, 98, 196)

    fill (0);
    strokeWeight (4);
    stroke (0);
    bezier (144, 176, 128, 182, 107, 190, 87, 177)

    fill (0);
    stroke (0);
    triangle (128, 186, 140, 196, 77, 195)

    fill (0);
    stroke (0);
    triangle (115, 179, 57, 203, 124, 196)


    fill (0);
    strokeWeight (8);
    stroke (0);
    bezier (99, 182, 86, 183, 69, 191, 57, 207)

    noFill (0);
    strokeWeight (9);
    stroke (221, 197, 188);
    bezier (130, 166, 111, 172, 89, 176, 56, 192)

    strokeWeight (5);
    stroke (0);
    line (125, 176, 116, 150)

    fill (225);
    strokeWeight (4);
    stroke (0);
    bezier (48, 212, 59, 234, 76, 244, 108, 244)

    noFill (0);
    strokeWeight (7);
    stroke (0);
    bezier (61, 232, 78, 244, 115, 246, 129, 243)

    noFill (0);
    strokeWeight (7);
    stroke (0);
    bezier (67, 236, 95, 238, 117, 245, 130, 240)
    
    noFill (0);
    strokeWeight (6);
    stroke (0);
    bezier (130, 240, 137, 238, 142, 243, 146, 246)

    strokeWeight (3);
    stroke (0);
    line (49, 188, 67, 174)

    strokeWeight (3);
    stroke (0);
    line (51, 195, 68, 180);
    
    strokeWeight (3);
    stroke (0);
    line (44, 170, 61, 159);

    strokeWeight (3);
    stroke (0);
    line (43, 178, 61, 164);

    strokeWeight (3);
    stroke (0);
    line (42, 182, 61, 167);

    



    //mouse location
    stroke (0);
    strokeWeight (1)
    text (mouseX, 100, 40)
    text (mouseY, 130, 40)
    
    

    
    
  
  

  }
img1 = "";
img2 = "";
img3 = "";
img4 = "";
img5 = "";

function setup(){
   canvas = createCanvas(640, 420);
   canvas.center();  
}

function preload(){
    img1 = loadImage("IMG_1725.jpg");
    img2 = loadImage("IMG_1727.jpg");
    img3 = loadImage("IMG_1728.jpg");
    img4 = loadImage("IMG_1860.jpg");
    img5 = loadImage("IMG_1731.jpg");
}

function draw(){
    image(img1, 0, 0, 640, 420);
    image(img2, 0, 0, 640, 420);
    image(img3, 0, 0, 640, 420);
    image(img4, 0, 0, 640, 420);
    image(img5, 0, 0, 640, 420);
    fill("#FF0000");
    text("kitchen",45 ,75);
    noFill();
    stroke("#0000FF");
    rect(30, 60, 450, 350);
    textSize(25);
}
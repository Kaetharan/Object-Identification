img="";
status="";

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    stroke("#ff0000");
    noFill();
    rect(50,60,525,350);
    text("Dog",60,80);

    fill("#ff0000");
    stroke("#ff0000");
    noFill();
    rect(300,70,265,330);
    text("Cat",310,90);
}

function gotResult(error, results){
if(error){
    console.error(error);
}else{
    console.log(results);

}
}
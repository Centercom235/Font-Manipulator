
leftwristX=0 ;
rightwristX=0 ;
difference=0 ;



function preload(){

}

function setup(){
     video=createCapture(VIDEO);
     video.size(550, 580);
canvas=createCanvas(450, 450);
canvas.position(600, 150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}


    function draw(){
        background("#79f2e6");
        fill("#03adfc");
        textSize(difference);
        text("Samarth", 100, 200);
        document.getElementById("font_size").innerHTML="fontSize of the text will be= "+difference+"px";
        }


        


function modelLoaded(){
    console.log("poseNet has been initialized!");
}

function gotPoses(results){
    if(results.length>0){
console.log(results);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftwristX= "+leftwristX+" , rightwristX= "+rightwristX);
console.log("difference= "+difference);
    }
}
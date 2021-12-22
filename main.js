leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(160,150)

    canvas = createCanvas(500, 550);
    canvas.position(750, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized")
}
function gotPoses(results){
    if(results.lenght > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
function draw(){
    background("#F3F7F0");
    textSize(difference);
    fill("#A93F55");
    text("Sharanya", 50, 400);
}
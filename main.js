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
    }
}
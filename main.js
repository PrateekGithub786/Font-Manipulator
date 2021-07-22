difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(570, 100);

    pose = ml5.poseNet(video, modelLoaded);
    pose.on("pose", gotResults);
}

function modelLoaded(){
    console.log("PoseNEt is Loaded")
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("#FF0000");
    document.getElementById("value").innerHTML = "Width And The Height Of The Square Is " + difference;

    textSize(difference);
    stroke("#FFE787");
    text("Prateek", 50, 400);
}
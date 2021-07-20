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
    }
}

function draw(){
    background("#FF0000");
}
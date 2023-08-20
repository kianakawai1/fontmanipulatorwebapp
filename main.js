difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}
    
function draw()
{
    background("#939be2");
    document.getElementById("fontsize").innerHTML="The size of the font will be: "+ difference +" px";
    text('KIANA', 30, 30);
}
    
    function modelLoaded(){
    console.log("loaded");
}
    
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        textSize(difference);
}
}
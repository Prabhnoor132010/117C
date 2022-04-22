nosex=0;
nosey=0;
function preload() {
  clown_nose=loadImage("https://i.postimg.cc/SxJn2msz/download.png")
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO)  ;
    video.size(400,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length   > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;

        console.log("nose x = " +results[0].pose.nose.x);
        console.log("nose y = " +results[0].pose.nose.y);
    }
}
 
function modelLoaded() {
    console.log("Posenet is lod");
}

function draw() {
    image(video,0,0,400,300);
image(clown_nose,nosex,nosey,30,60);

}

function take_snapshot() {
 save('my filterImage.png');
}

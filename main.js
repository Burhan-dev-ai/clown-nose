function preload(){

}

function setup(){
    Canvas=createCanvas(250,250);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,250,250)
}

function take_snapshot(){
    save('myimage.png')
    
}

function modelloaded() {
    console.log("posenet is initialize");
    

}

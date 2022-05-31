noseX=0;
noseY=0;
video="";
function preload() {
	world_start = loadSound("world_start.wav");
	jjump=loadSound("jump.wav");
	ccoin=loadSound("coin.wav");
	sstomp=loadSound("kick.wav");
	ggame_over=loadSound("gameover.wav");
	ddie=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotresults);
}
function modelLoaded(){
	console.log("Model Loaded!");
}
function gotresults(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}
function draw() {
	game()	
}







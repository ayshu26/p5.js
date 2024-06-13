function preload(){
console.log("1");
}
function setup(){
    console.log("2");
canvas=createCanvas(500,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
}
function draw(){
    console.log("3");
background("blue")
image(video,50,50,400,300)
tint(tintColour)
fill("red")
circle(50,50,20)
circle(450,50,20)
circle(450,350,20)
circle(50,350,20)
rect(0,0,20,400)
rect(0,0,500,20)
rect(0,380,500,20)
rect(480,0,20,400)
}
function apply_filter(){
    tintColour=document.getElementById("tint").value
}
function take_snapshot(){
    save("selfie1.png")
}
tintColour=""
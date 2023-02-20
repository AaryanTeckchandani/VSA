var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}
console.log("Setting up Webcam properties")
Webcam.set({
    width:360,
    height:250,
    image_format : 'png', 
    png_quality:90
});
camera = document.getElementById("camera");

function speak(){
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    console.log("Webcame set up waiting for attaching")
    Webcam.attach(camera);

    setTimeout(function(){
        takesnapshot()
    }, 5000);
    
}


function takesnapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("result0").innerHTML = "<img id='selfieImage' src='" + datauri +"'>"
    })

    Webcam.snap(function(datauri){
        document.getElementById("result1").innerHTML = "<img id='selfieImage' src='" + datauri +"'>"
    })

    Webcam.snap(function(datauri){
        document.getElementById("result2").innerHTML = "<img id='selfieImage' src='" + datauri +"'>"
    })
    
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href=image;
    link.click();
}
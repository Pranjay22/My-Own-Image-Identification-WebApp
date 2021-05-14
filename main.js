function setup() {
 canvas = createCanvas(300 , 300);
 canvas= center(); 
 video = createCapture(VIDEO);
 video.hide()
 classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/09uuXP751/')
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video , 0 , 0 , 300 , 300);
    classify.classify(video , gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
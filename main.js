function start_sound(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F5hJOvpfr/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_name").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("accuracy_sounds").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("sound_name").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy_sounds").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById("Sheep");
        img2 = document.getElementById("Cow");
    }}

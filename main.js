function setup()
    {
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide()

    }

    console.log('ml5.version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yqu7052Qa/model.json',modelLoaded);
function modelLoaded()
{
  console.log("model is loaded");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    
}



    

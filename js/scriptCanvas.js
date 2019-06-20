let environment = document.getElementById('environment')
var birdSpace = environment.getContext('2d')
birdSpace.fillStyle = 'orange'
birdSpace.strokeRect(10, 10, 100, 400)
var bird = environment.getContext('2d')
bird.fillStyle = "green"
bird.beginPath();
bird.arc(95, 50, 40, 0, 2 * Math.PI);
bird.stroke(); 
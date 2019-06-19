let bird = document.getElementById('bird')
let highLevel = 0;
document.addEventListener('keypress', function(e) {
  let OffSetYNeated = bird.style.bottom.slice(0, (bird.style.bottom.length - 2))
  let birdOffSetY = parseInt(OffSetYNeated) 
    highLevel = birdOffSetY
    bird.style.setProperty('bottom', birdOffSetY)
    console.log(bird.style.bottom)
  jump(e, birdOffSetY)
})

function jump(e, currentPosition) {
  if(e.keyCode === 32 && highLevel <= 150) {
    bird.animate([
      {bottom: `${currentPosition}px`},
      {bottom: '50px'},
      { bottom: '-150px'},
    ], 
    {
    duration: 1500,
    fill: 'forwards',
    easing: 'ease-in-out'
  });
  }
}



/* function jump(e) {
  if(e.keyCode === 32 && highLevel <= 150) {
    let OffSetYNeated = bird.style.bottom.slice(0, (bird.style.bottom.length - 2))
    let birdOffSetY = parseInt(OffSetYNeated) 
    birdOffSetY += 10
    highLevel = birdOffSetY
    bird.style.bottom = birdOffSetY+'px'
    console.log(bird.style.bottom)
  }
} */
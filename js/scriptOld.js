let bird = document.getElementById('bird')
let highLimit = 0;
let leap = 10
let intervalWatcher = setInterval(positionWatcher, 100)
let currentBirdPosition = ''
document.addEventListener('keypress', function(e) {
  jump(e, currentBirdPosition)
  //bird.setAttribute('style', 'bottom: 100px;')
  /* $('#bird').css('bottom')
  let OffSetYNeated = bird.style.bottom.slice(0, (bird.style.bottom.length - 2))
  let birdOffSetY = parseInt(OffSetYNeated) 
    highLimit = birdOffSetY
    bird.style.bottom = birdOffSetY+'px'
    console.log(birdOffSetY) 
    console.log(bird.offsetTop)
    jump(e, bird.offsetTop) */
})

function positionWatcher() {
  let offSetY = takeOutValueOnly(bird.getAttribute('style'))
  currentBirdPosition = offSetY
  highLimit = currentBirdPosition
}

function jump(e, currentPosition) {
  //console.log(e.keyCode)
  if(e.keyCode === 97 && highLimit <= 130) {
    bird.setAttribute('style', `bottom: ${currentPosition + leap}px`)
    console.log(highLimit)
  }
}

function takeOutValueOnly(bottomInlineStyle) {
  let value = '';
  for(let i = 0; i < bottomInlineStyle.length; i++) {
    if(Number(bottomInlineStyle[i]) || bottomInlineStyle[i] === "0")
    value += bottomInlineStyle[i]
  }
  return Number(value)
}



/* function jump(e) {
  if(e.keyCode === 32 && highLimit <= 150) {
    let OffSetYNeated = bird.style.bottom.slice(0, (bird.style.bottom.length - 2))
    let birdOffSetY = parseInt(OffSetYNeated) 
    birdOffSetY += 10
    highLimit = birdOffSetY
    bird.style.bottom = birdOffSetY+'px'
    console.log(bird.style.bottom)
  }
} */
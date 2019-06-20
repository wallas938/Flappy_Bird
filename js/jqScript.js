  /** Global Variable */
  let highLimit = 0;
  let leap = 20
  let currentBirdPosition = 0
  let intervalOffSet = setInterval(getCurrentPosition, 1)
  /** END of Global Variable */

  /** Execution function */
$(function() {
  $('#bird').addClass('fall');
  $(document).keypress(function (e) {
    jump(e, currentBirdPosition)
  });
})
  /** END of Execution function */

  /** Fonctions declaration **/

function getCurrentPosition() {
  currentBirdPosition = getValueOnly($('#bird').css('bottom'))
  highLimit = getValueOnly($('#bird').css('bottom'))
  console.log(currentBirdPosition)
}

function getValueOnly(bottomInlineStyle) {
  let value = '';
  for(let i = 0; i < bottomInlineStyle.length; i++) {
    if(Number(bottomInlineStyle[i]) || bottomInlineStyle[i] === "0")
    value += bottomInlineStyle[i]
  }
  return Number(value)
}

function jump(e, currentPosition) {
  if(e.keyCode === 97 && highLimit > 150) {
    console.log(typeof currentPosition)
    $('#bird').animate({bottom: `${currentPosition+leap}px`}
    , 100)
  }
}
const display = document.getElementById('display')
const reset = document.getElementById('reset-btn')
const magic = document.getElementById('magic-btn')

const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button){
  button.addEventListener('click', function(){
    display.value += button.innerText
  })
})

reset.addEventListener('click', function(){
  display.value = 0
})

let count =0

magic.addEventListener('click', function(){
  count ++
  let num
  let displayNum

displayNum =  parseInt(display.value)

  if(count ==1 ){
  num = displayNum +5
  display.value = num
  } else if(count ==2){
  num = displayNum *2
  display.value = num
  } else if(count ==3){
    count =0
    num = displayNum -3
    display.value = num
  }
})
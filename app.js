<input type = 'text' id='input'>

<button id = "magicButton">
Button
</button>

const btn = document.getElementById('magicButton')
let result = document.getElementById('result')
let input = document.getElementById('input')
let count = 0
  
btn.addEventListener('click', function(){
count ++
let num
let inputNum

inputNum = parseInt(input.value)
 if(count ==1){
 num = inputNum + 5
 input.value = num
 }
 else if(count ==2){
 num = inputNum *5
 input.value = num
 }
 if(count ==3){
 count =0
num = inputNum -3
 input.value = num
 }
})
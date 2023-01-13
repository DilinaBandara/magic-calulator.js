const display = document.getElementById('display')
const reset = document.getElementById('reset-btn')

console.log(display)
console.log(reset)

const btns =[]


for(let i=0; i<10; i++){
  console.log(btns[i])
  btns[i] = document.getElementById('btn' + i)
  btns[i].addEventListener('click',()=>{
    display.textContent = i
  })
}
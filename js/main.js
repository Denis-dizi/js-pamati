const res = document.querySelector('#content')
const app = document.querySelector('#app')
const clk = document.querySelector('#clock')

if(content && content.length > 0){
  if(app){
    const buttons = app.querySelectorAll('button')
    let slideCounter = 0
    render(slideCounter)
    let maxSlides = content.length - 1
    buttons[0].onclick = () => {
      slideCounter--
      if(slideCounter < 0){
        slideCounter = 0
      }
      render(slideCounter)
    }
    buttons[1].onclick = () => {
      slideCounter++
      if(slideCounter > maxSlides){
        slideCounter = maxSlides
      }
      render(slideCounter)
    }
  }
}

setInterval(()=> {
  makeTime(clk)
}, 1000)

function render(num){
  res.innerHTML = content[num]
}

function makeTime(el){
  const norm = a => a < 10 ? `0${a}` : a
  let d = new Date()
  let hs = d.getHours()
  let ms = d.getMinutes()
  let ss = d.getSeconds()
  if(el){
    el.innerHTML = `${norm(hs)}:${norm(ms)}:${norm(ss)}`
  } else {
    throw "Not given element here..."
  }
}

function foo(){
  bar()
}

function bar(){
  bazz()
}

function bazz(){
  try{
    throw new Error('Here is a stack trace:')
  }
  catch(e){
    console.log(e)
  }
}

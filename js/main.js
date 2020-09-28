const res = document.querySelector('#content')
const app = document.querySelector('#app')
const clk = document.querySelector('#clock')
const wth = document.querySelector('#weath')
const vid = document.querySelector('#stackvideo')


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

function foo(){bar()}

function bar(){bazz()}

function bazz(){
  try{
    throw new Error('Here is a stack trace:')
  }
  catch(e){
    console.log(e)
  }
}

fetch('http://192.168.1.151/api/inboxweather/')
  .then(res => res.json())
  .then(data => h(data))
  .catch(e => console.log(e))

function h(data) {
  console.log(data)
  let out = ''
  let city = ''
  if (data.geoip && data.weather){
    if (data.geoip.region && cities[data.geoip.region]) {
      city = cities[data.geoip.region]
    } else (
      city = data.geoip.region
    )
    out += `<h4 class="center">${city}</h4>`
    out += `<h5 class="center">${data.weather.currTemp || 'none'}&#8451;</h5>`
    wth.innerHTML = out
  }
}

function vidd(mode){
  const vid = document.querySelector('#stackvideo')
  console.log(vid)
  console.log(mode)
  if(mode == 1){
    vid.play()
  } else if (mode == 2){
    vid.pause()
  } else if (mode == 3){
    vid.currentTime = 0
  }
} 
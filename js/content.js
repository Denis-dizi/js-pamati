let content = [
  `<h2>Javascript pamati</h2>
  <p>Call stack and callback functions</p>

  <h3>What is callstack?</h3>
  <p>Here is a little video example of this process:</p>
  <video id="stackvideo" src="img/stack.mp4" muted></video>
  <div>
  <button class="btn" onclick="vidd(1)">Play</button>
  <button class="btn" onclick="vidd(2)">Pause</button>
  <button class="btn" onclick="vidd(3)">Begin</button>
  </div>
  <div class="precode">
  <pre style="text-align:left">
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
  </pre>
  </div>
  <button onclick="foo()" class="btn ">Show stack example</button>
  <div id="stack"></div>`,
  '<p>Hello Varius</p>',
  '<p>Hello ReactJs</p>'
]
let content = [
  `<h2>Javascript pamati</h2>
  <p>Call stack and callback functions</p>
  <h3>What is callstack?</h3>
  <pre>
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
      document.getElementById('stack').innerHTML = e.message
      console.log(e)
    }
  }
  </pre>
  <button onclick="foo()" class="btn ">Show stack example</button>
  <div id="stack"></div>`,
  '<p>Hello Varius</p>',
  '<p>Hello ReactJs</p>'
]
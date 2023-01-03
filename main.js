function insert (num) {
  const number =  document.getElementById('result').innerHTML 
  document.getElementById('result').innerHTML = number +num
}

function clean () {
  document.getElementById('result').innerHTML = "";
}

function back () { 
  const results = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = results.substring(0, results.length -1)
}

function calc() {
  const result = document.getElementById('result').innerHTML;
  if (result)
  {
    document.getElementById('result').innerHTML = eval(result)
  }
}


function othername() {
    var input = document.getElementById("userInput").value;
    localStorage.setItem('userInput', input);
    document.body.innerHTML = document.body.innerHTML.replace(/Dogname/gi, input);
  }

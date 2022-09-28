function get(url) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.onload = function() {
        resolve({ status: http.status, data: JSON.parse(http.response) });
      };
      http.open("GET", url);
      http.send();
    });
  }


function post(url, data) {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.onload = function() {
        resolve({ status: http.status, data: JSON.parse(http.response) });
      };
      http.open("POST", url);
      //Make sure that the server knows we're sending it json data.
      http.setRequestHeader("Content-Type", "application/json");
      http.send(data);
    });
  }

function printValue(score){//gets the score variable.
      let printedValue = ""
      if (score==0){//Checks for every possible case of FizzBuzz and sets the printedValue according to it.
        printedValue = 0;
      }
      else if (score%3==0 && score%5==0){
        printedValue = "FizzBuzz";
      }
      else if (score%5==0){
        printedValue = "Buzz";
      }
      else if (score%3==0){
        printedValue = "Fizz";
      }
      else
      {
        printedValue = score;
      }
      document.getElementById('printScore').value = printedValue;//updates the value of the current score.
    }
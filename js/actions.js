
function verifyNumberInString(string){
     var i = 0;
     while(i < string.length && (string[i] == '0' || string[i] == '1'))
          i++;
     if(i != string.length)
          return 0;
     return 1;
}

function convertBinaryInDecimal(string){
     var result = 0;
     var power = 1;
     for(var i = string.length - 1; i >= 0; i--){
          if(string[i] == '1')
               result += power;
          power *= 2;
     }
     return result;
}

function createResult(){
     var inputNumberBinary = document.querySelector("#bin");
     var numberBinary = inputNumberBinary.value;

     if(!verifyNumberInString(numberBinary) || numberBinary == ""){
          alert("Number is not binary or is text");
          inputNumberBinary.focus();
          return;
     }

     var result = convertBinaryInDecimal(numberBinary);
     var outputResult = document.querySelector("#result");
     
     var newElement = document.createElement("p");
     var newText = document.createTextNode("Binary is " + numberBinary + ", result in decimal is " +String(result));
     newElement.appendChild(newText);
     outputResult.appendChild(newElement);
}

var detectEventClick = document.querySelector("#showe");
detectEventClick.addEventListener("click", createResult);

var detectEventKeypress = document.querySelector("#bin");
detectEventKeypress.addEventListener("keypress", (event) => {
     if(event.key == "Enter"){
          createResult();
     }
})
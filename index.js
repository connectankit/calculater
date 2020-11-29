let screen = document.querySelector("input");
var buttons = document.querySelectorAll('button');
let screenValue = "";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function(){
        buttonInnerHtml = buttons[i].innerHTML;
        console.log(buttonInnerHtml)
       if (buttonInnerHtml == "AC") {
           screenValue = "";
           screen.value = screenValue;

       }
       else if(buttonInnerHtml == "X"){
           buttonInnerHtml = "*";
       screenValue += buttonInnerHtml;
       screen.value = screenValue;
    }
    else if (buttonInnerHtml == "="){
        screen.value = eval(screenValue);
        

    }
    else if (buttonInnerHtml == "C"){
    screenValue = screenValue - screenValue
    screen.value = screenValue;
    console.log(screenValue)
    }
       else{
           screenValue += buttonInnerHtml;
           screen.value = screenValue;
       } 
       
    })
    
}


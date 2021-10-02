let screen = document.querySelector("input");
var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttonInnerHtml = buttons[i].innerHTML;
        if (buttonInnerHtml == "AC") {
            screen.value = '';

        }
        else if (buttonInnerHtml == "X") {
            buttonInnerHtml = "*";
            screen.value += buttonInnerHtml;
            //  = screenValue;
        }
        else if (buttonInnerHtml == "=") {
            screen.value = eval(screen.value);


        }
        else if (buttonInnerHtml == "C") {
            let remove = screen.value;
            let removeLast = remove.slice(0,-1)
            console.log(removeLast);
            screen.value = removeLast;
            console.log(screen.value)
            
            
        }
        else {
            screen.value += buttonInnerHtml;
            //  = screenValue;
        }

    })

}


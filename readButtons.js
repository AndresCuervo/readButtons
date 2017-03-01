var buttons = document.getElementsByTagName('button');

console.log(buttons.length);
var i = 0;  //  set your counter to 1
var max_i = 10;

function myLoop () {           //  create a loop function
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        //alert('hello');          //  your code here
        buttons[i].focus();
        //i++;                     //  increment the counter &
        if (++i < max_i) {            //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another
        }                        //  ..  setTimeout()
    }, 1000)
}

myLoop();

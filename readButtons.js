var buttons = document.querySelectorAll('button, [role="button"], input[type="submit"]');

console.log(buttons.length);
//  set your counter to 1
var i = 0;
var max_i = 10;

//  create a loop function
function myLoop () {
    //  call a 3s setTimeout when the loop is called
    setTimeout(function () {
        //  your code here
        //alert('hello');
        var b = buttons[i];
        console.log[buttons[i].value];
        // Mark as waiting to be read
        b.style.color = "#2EAFAC";
        setTimeout(function () {
            // mark as being focused
            b.style.color = "red";
            // wait to focus once a second
            b.focus();
        }, 1000);

        setTimeout(function () {
            // mark as read
            b.style.color = "black";
        }, 1500);
        //  increment the counter &
        //i++;
        //  if the counter < 10, call the loop function
        if (++i < max_i) {
            //  ..  again which will trigger another
            myLoop();
            //  ..  setTimeout()
        }
    }, 1000)
}

myLoop();

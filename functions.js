function ajax(Link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = JSON.parse(this.responseText);
            console.log(x.A);
        }
    };
    
    xhttp.open('GET', 'http://10.1.12.19' + Link, true);
    xhttp.send();
}

let green = false;
let blue = false;
let red = false;

function robo(booyah, on) {   //... , on) to make new param 
    console.log(booyah);
    switch (booyah) {
        case 'Forward':
            ajax('/motor/forward');
            break;
        case 'Back':
            ajax('/motor/backward');
            break;
        case 'Right':
            ajax('/motor/right');
            break;
        case 'Left':
            ajax('/motor/left');
            break;
        case 'Stop':
            ajax('/motor/stop');
            break;
        case 'Green':
          green = !green;
          ajax('/light/green/'+ (on ? 'on' : 'off')); //colors = 'green' to make work
          break;
        case 'Blue':
          blue = !blue;
          ajax('/light/blue/'+ (on ? 'on' : 'off'));
          break;
        case  'Red':
          red = !red;
          ajax('/light/red/'+ (on ? 'on' : 'off'));
        break;
    }
};
// var BTN = document.querySelector('#green') 
// BTN.onmousedown = function() {
//             robo('Green', 1)
//         }
//         BTN.onmouseup = function() {
//             robo('Green')
//         }
//This above code is for JavaScript light change 
    
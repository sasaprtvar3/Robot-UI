function ajax(Link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = JSON.parse(this.responseText);
            console.log(x.A);
        }
    };
    console.log('http://10.1.12.19' + Link);
    xhttp.open('GET', 'http://10.1.12.19' + Link, true);
    xhttp.send();
}

let green = false;
let blue = false;
let red = false;

function robo(booyah, on) {
    console.log(booyah);
    switch (booyah) {
        case 'Forward':
            ajax('/moveForward');
            break;
        case 'Back':
            ajax('/moveBackward');
            break;
        case 'Right':
            ajax('/turnRight');
            break;
        case 'Left':
            ajax('/turnLeft');
            break;
        case 'Stop':
            ajax('/stopMovement');
            break;
        case 'Green':
          green = !green;
          ajax('/light/green/'+ (on ? 'on' : 'off'));
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

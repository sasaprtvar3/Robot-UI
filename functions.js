function ajax(Link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = JSON.parse(this.responseText);
            console.log(x.A);
        }
    };
    xhttp.open('GET', Link, true);
    xhttp.send();
}

let green = false;
let blue = false;
let red = false;

function robo(booyah) {
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
          ajax('/light/green/'+ (green ? 'on' : 'off'));
          break;
        case 'Blue':
          blue = !blue;
          ajax('/light/blue/'+ (blue ? 'on' : 'off'));
          break;
        case  'Red':
          red = !red;
          ajax('/light/red/'+ (red ? 'on' : 'off'));
        break;
    }
};

// function goFoward() {
//     ajax('/moveBackward');
//     console.log('Go Forward!');
// }

// function goBack() {
//     ajax('/moveBackward');
//     console.log('Go Back!');
// }

// function turnRight() {
//     ajax('/moveBackward');
//     console.log('Turn Right!');
// }

// function turnLeft() {
//     ajax('/moveBackward');
//     console.log('Turn Left!');
// }

// function stop() {
//     ajax('/moveBackward');
//     console.log('Stop!');
// }
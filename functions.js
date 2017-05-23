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

function robo(booyah) {
    console.log(booyah);
    switch (booyah) {
        case 'Forward':
            ajax('/moveForward');
            break;
        case 'Back':
            ajax('/moveBackwards');
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
    }
};

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
            ajax('/moveBackward');
            break;
        case 'Back':
            ajax('/moveBackward');
            break;
        case 'Right':
            ajax('/moveBackward');
            break;
        case 'Left':
            ajax('/moveBackward');
            break;
        case 'Stop':
            ajax('/moveBackward');
            break;
    }
};

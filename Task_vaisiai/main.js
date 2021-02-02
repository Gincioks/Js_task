function bendrai() {

    var x = prompt("Kiek obuoliu turi Maryte?");
    var y = prompt("Kiek obuoliu turi Jonukas?");

    if (x > y) {
        console.log("Maryte turi daugiau obuoliu");
    } else if (x == y) {
        console.log("Atiduokim abuolius Editai");
    } else {
        console.log("Jonukas turi daugiau obuoliu");
    }

    var bendrai = parseInt(x) + parseInt(y);

    switch (bendrai.length) {
        case 10:
            console.log("Jus turite 10 abuoliuku");
        case 20:
            console.log("Jus turite 20 abuoliuku");
        case 30:
            console.log("Jus turite 30 abuoliuku");
        default:
            console.log("Jus turite %s abuoliuku", bendrai);
    }

    return bendrai
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function did_maz() {
    var x = bendrai();
    var skirtumas = prompt("Irasykite skirtuma");


    for (i = 0; i < 9; i++) {
        if (i < 5) {
            x += parseInt(skirtumas);
            console.log(x)
        }
        else {
            x -= parseInt(skirtumas);
            console.log(x)
        }
        sleep(700)
    }
}

function vaisiuMasyvas() {
    var vaisiai = ["kriaušė", "melionas", "spanguolė", "vynuogė", "vyšnia", "apelsinas"];
    console.log(vaisiai[3], vaisiai[5]);

    for (i = 0; i < vaisiai.length; i++) {
        console.log(vaisiai[i]);
    }

}

function vaisiuKaina() {
    var vaisius = prompt("Koki vaisiu pirksite?");
    var kaina = prompt("Kiek kainuoja vienas?");

    while (isNaN(parseInt(kaina))) {
        var kaina = prompt("Iveskite skaiciu...");
        return false;
    }

    var kainaPenki = parseInt(kaina) * 5;

    console.log("Penkiu %s kaina yra: %d", vaisius, kainaPenki);
}

function vaisiuKainos() {
    var vaisius = document.getElementById("vaisius").value;
    var kaina = document.getElementById("kaina").value;
    var kiekis = document.getElementById("kiekis").value;

    var galutineKaina = kaina * kiekis;

    document.getElementById("pirktiVaisiai").innerText = vaisius;
    document.getElementById("kainaa").innerText = kaina;
    document.getElementById("kiekiis").innerText = kiekis;
    document.getElementById("galutine_kaina").innerText = galutineKaina;

}


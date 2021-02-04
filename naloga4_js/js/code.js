function stevilka1(a) {

    return a;

}

var st1 = "Spremenljivka a: " + stevilka1(4);
document.querySelector('#sprem1').innerHTML = st1;

function stevilka2(b) {

    return b;

}

var st2 = "Spremenljivka b: " + stevilka2(5);
document.querySelector('#sprem2').innerHTML = st2;


function sum(a,b) {

    return a + b;

}

var rez = "Vsota: " + sum(4,5);
document.querySelector('#rezultat').innerHTML = rez;
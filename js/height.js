let fronts = ["fone", "ftwo", "fthree", "ffour"]
let backs = ["bone", "btwo", "bthree", "bfour"]

for (var i=0; i<fronts.length; i++) {

    var front  = document.getElementById(fronts[i]);
    var altura = front.offsetHeight;
    var back = document.getElementById(backs[i]);
    var alturaf = `${altura}px`;
    back.style.height = alturaf;
}


function cartas() {

    for (var e=0; e<fronts.length; e++) {

        var front  = document.getElementById(fronts[e]);
        var altura = front.offsetHeight;
        var back = document.getElementById(backs[e]);
        var alturaf = `${altura}px`;
        back.style.height = alturaf;
    }

}
    cartas();
    window.onresize = cartas;
    
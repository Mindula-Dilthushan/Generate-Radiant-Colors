//Mindula Dilthushan
//Generate-Radiant-Color
var generate_color_code = document.getElementById("generate_color_code");
var color_01 = document.querySelector(".color_01");
var color_02 = document.querySelector(".color_02");
var radiant_color = document.getElementById("radiant_color");

function setGradient() {
    radiant_color.style.background =
        "linear-gradient(to right, "
        + color_01.value
        + ", "
        + color_02.value
        + ")";

    generate_color_code.textContent = radiant_color.style.background + ";";
}

color_01.addEventListener("input", setGradient)

color_02.addEventListener("input", setGradient)

function myFunction() {
    var copyText = document.getElementById("generate_color_code").textContent;

    navigator.clipboard.writeText(copyText);

    $('#yes_copy').css({
        'display': 'block'
    });
}

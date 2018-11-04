body = document.querySelector('body');
color1 = document.querySelector('#color1');
color2 = document.querySelector('#color2');
selectedColor = document.querySelector('#selectedColor');

function setGradient() {
    body.style.background =
        'linear-gradient(to right, '
        + color1.value
        + ','
        + color2.value
        + ')';
    selectedColor.textContent = body.style.background;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const colorButton = document.getElementsByClassName('colorChange')[0];
colorButton.addEventListener('click', colorize);

function colorize(event) {
    const navBar = document.getElementsByClassName('navBar')[0];
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    navBar.style.backgroundColor = randomColor;
}

var canvas,player,enemy;
var follow = function(evt) {
 if (evt.offsetX - players[0].offsetLeft > 0) {
     players[0].style.left = (players[0].offsetLeft + 1)+ 'px';
 } else {
     players[0].style.left = (players[0].offsetLeft - 1)+ 'px';
 }
 if (evt.offsetY - players[0].offsetTop > 0) {
     players[0].style.top = (players[0].offsetTop +1)+ 'px';
 } else {
     players[0].style.top = (players[0].offsetTop - 1)+ 'px';
 }
}

var moveEnemy = function() {
    if (players[0].offsetLeft - enemies[0].offsetLeft > 0) {
        enemies[0].style.left = (enemies[0].offsetLeft + 1)+ 'px';
    } else {
        enemies[0].style.left = (enemies[0].offsetLeft - 1)+ 'px';
    }
    if (players[0].offsetTop - enemies[0].offsetTop > 0) {
        enemies[0].style.top = (enemies[0].offsetTop + 1)+ 'px';
    } else {
        enemies[0].style.top = (enemies[0].offsetTop - 1)+ 'px';
    }
}

window.onload = function () {
    canvas = document.getElementById('canvas');
    players = document.getElementsByClassName('player');
    enemies = document.getElementsByClassName('enemy');
    canvas.onmousemove = follow;

    setInterval(moveEnemy, 50)};
const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');
const gameArea = document.querySelector('.game-area');

let posX = 50;
let posY = 180;

let enemyX = 300;
let enemyY = 100;
let dirX = 10;
let dirY = 10;

function moverInimigo() {
    const rect = gameArea.getBoundingClientRect();
    enemyX += dirX;
    enemyY += dirY;

    if (enemyX <= 0 || enemyX >= rect.width - 40) dirX *= -1;
    if (enemyY <= 0 || enemyY >= rect.height - 40) dirY *= -1;

    enemy.style.left = enemyX + 'px';
    enemy.style.top = enemyY + 'px';

    checarColisao();
}
setInterval(moverInimigo, 30);

document.addEventListener('keydown', (e) => {
    const step = 20;
    const rect = gameArea.getBoundingClientRect();

    if (e.key === 'ArrowUp') posY -= step;
    if (e.key === 'ArrowDown') posY += step;
    if (e.key === 'ArrowLeft') posX -= step;
    if (e.key === 'ArrowRight') posX += step;

    posX = Math.max(0, Math.min(posX, rect.width - 40));
    posY = Math.max(0, Math.min(posY, rect.height - 40));

    player.style.left = posX + 'px';
    player.style.top = posY + 'px';

    checarColisao();
});

function checarColisao() {
    const r1 = player.getBoundingClientRect();
    const r2 = enemy.getBoundingClientRect();

    if (
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
    ) {
        alert("Game Over!");
        location.reload();
    }
}

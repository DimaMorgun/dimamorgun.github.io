var egg, tick = 240, orient, snake = [[-1, 0]], size = 30;

function init() {
    var ws = '';
    for (var x = 0; x < size; x++) {
        ws += '<tr>';
        for (var y = 0; y < size; y++) {
            ws += '<td></td>'
        }
        ws += '</tr>'
    }
    $('#world').html(ws);
}

function $get_cell(x, y) {
    return $('#world tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) +')');
}

function die() {
    var isDead = false;
    var head = snake[0];

    if ( head[0] < 0 || head[1] < 0 || head[0] >= size || head[1] >= size  ) {
        isDead = true;
    }

    var rest = snake.slice(1);

    for (var posIndex in rest) {
        var pos = rest[posIndex];

        if ( pos[0] == head[0] && pos[1] == head[1] ) {
            isDead = true;
        }
    }

    if ( isDead ) {
        orient = [1, 0];
        snake = [[5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]];
    }
}

function spaun_egg() {
    egg = [Math.floor((Math.random()*size)), Math.floor((Math.random()*size))];

    $('#world td').removeClass('egg');
    $get_cell(egg[0], egg[1]).addClass('egg');
}

function eat_egg() {
    var head = snake[0];

    if ( head[0] == egg[0] && head[1] == egg[1] ) {
        var last = snake[snake.length - 1];
        snake.push(last.slice());

        spaun_egg();
    }
}

function move(mx, my) {
    for (var posIndex in snake) {
        var pos = snake[posIndex];
        var mx2 = pos[0], my2 = pos[1];

        snake[posIndex][0] = mx;
        snake[posIndex][1] = my;

        mx = mx2;
        my = my2;
    }
}

function rel_move(mx, my) {
    var pos = snake[0];
    move(pos[0] + mx, pos[1] + my)
}

function draw() {
    $('#world td').removeClass('snake').removeClass('head');

    for (var posIndex in snake) {
        var pos = snake[posIndex];
        var x = pos[0], y = pos[1];

        $get_cell(x, y).addClass('snake');
    }

    $get_cell(snake[0][0], snake[0][1]).addClass('head');
}

document.body.onkeydown = function(e) {
    var codes = {38: [0, -1], 40: [0, 1], 37: [-1, 0], 39: [1, 0]};

    if ( codes[e.keyCode] ) {
        orient = codes[e.keyCode];
    }
};

init();
die();
draw();
spaun_egg();

setInterval(function(){
    rel_move(orient[0], orient[1]);
    die();
    eat_egg()
    draw();
}, tick);

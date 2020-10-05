let fps=60;
let game=new Game();

game.resize();

window.onresize=()=>game.resize();

let interval=setInterval(()=>game.draw(),1000/fps);

let appCanvas = document.getElementById("app");
let appCtx = canvas.getContext("2d");

let $calcButton = document.getElementById('calc')
let $restartButton = document.getElementById('restart')

// 向量集合
// let vecs = []
// let vecNexts = []

let dots = []

function calcDot(balls) {
  const _dot = []
  const len = balls.length;
  for (let i = 0; i < len; i++) {
    const ball = balls[i];
    const ball1 = balls[(i + 1) % len];
    const ball2 = balls[(i + 2) % len];
    const vec = new Vec(ball.x, ball.y)
    const vec1 = new Vec(ball1.x, ball1.y)
    const vec2 = new Vec(ball2.x, ball2.y)

    const redVec = vec1.sub(vec)
    const blueVec = vec2.sub(vec)

    if (blueVec.isLeftTo(redVec)) {
      console.log(i++)
    }


    _dot.push({
      ball,
      redVec,
      blueVec
    })
    dots = _dot
  }
}

$calcButton.addEventListener('click', () => {
  if (!dots.length) {
    calcDot(balls)
  } else {
    calcDot(dots.map(d => d.ball))
  }

})

calcDot(balls)

$restartButton.addEventListener('click', () => {
  dots = []
})
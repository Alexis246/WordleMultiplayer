const layout = {
  spacing_x: 0.1,
  spacing_y: 0.1,
  size: 0.09,
};
let stateB;
let allWords, allWordsCur;
let wordle = new Wordle(100,50);

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  //make it possible for wM to get random from wB if allWords===true
  /*stateB = createButton(state);
  stateB.position(10,10);
  stateB.mousePressed(()=>{
    state=(state==="guess")? "solve":"guess";
  });*/
  allWords = true;
  allwordsCur = allWords;
}

function draw() {
  background(220);
  wordle.show(wordle.board);
  allWordsCur = allWords;
  //stateB.html(state);
}

function keyPressed() {
  if(wordle.getInput){
     wordle.input(keyCode);
     }
  return false;
}

function compare(w1, w2) {
  let arr = [0, 0, 0, 0, 0];
  let arr1 = [0, 0, 0, 0, 0];
  for (let a in w1) {
    if (w1[a] === w2[a]) {
      arr[a] = 2;
      arr1[a] = 1;
    }
  }
  for (let a in w1) {
    for (let b = 0; b < w2.length; b++) {
      if (w1[a] === w2[a]) {
        break;
      }
      if (w1[a] === w2[b] && arr1[b] != 1) {
        arr[a] = 1;
        arr1[b] = 1;
        b = 10;
      }
    }
  }
  return arr;
}

class Wordle {
  constructor(x, y) {
    this.answer = wA[Math.floor(Math.random() * (wA.length + 1))].toUpperCase();
    this.board = ["6", ""];
    this.state = "guess";
    this.getInput = true;
    this.x = x;
    this.y = y;
  }

  input(char) {
    if (this.state === "guess") {
      if (
        char > 64 &&
        char < 91 &&
        this.board[this.board.length - 1].length < 5 &&
        this.board.length < parseInt(this.board[0]) + 2
      ) {
        this.board[this.board.length - 1] += String.fromCharCode(char);
      } else if (
        char === ENTER &&
        this.board[this.board.length - 1].length == 5
      ) {
        if (
          wA.find((e) => e.toUpperCase() === this.board[this.board.length - 1])
        ) {
          this.board.push("");
        } else if (
          wB.find((e) => e.toUpperCase() === this.board[this.board.length - 1])
        ) {
          this.board.push("");
        }
      } else if (
        char === BACKSPACE &&
        this.board[this.board.length - 1][0] != null
      ) {
        this.board[this.board.length - 1] = this.board[
          this.board.length - 1
        ].slice(0, -1);
      }
    }
  }

  show(arr) {
    textSize(width * layout.size * 0.6);
    for (let i = 0; i < arr[0]; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i + 2] != null) {
          let k;
          if (this.state === "guess") {
            k = compare(arr[i + 1], this.answer)[j];
          }
          let c;
          switch (k) {
            case 0:
              c = "red";
              break;
            case 1:
              c = "yellow";
              break;
            case 2:
              c = "green";
              break;
            default:
              break;
          }
          fill(c);
        }
        rect(
          width * ((j-2) * layout.spacing_x) + this.x,
          width * (i * layout.spacing_y + layout.size/2) + this.y,
          width * layout.size,
          width * layout.size
        );
        fill("white");
        if (arr[i + 1]) {
          if (arr[i + 1][j]) {
            push();
            fill("black");
            text(
              arr[i + 1][j],
              width * (j-2) * layout.spacing_x + this.x,
              width * (i * layout.spacing_y + layout.size/2) + this.y
            );
            pop();
          }
        }
      }
    }
  }
}

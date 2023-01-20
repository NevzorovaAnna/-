import Canvas from "./Canvas.js";
import GameLoop from "./GameLoop.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import Berry from "./Berry.js";

class Game {
  constructor(container) {
    this.canvas = new Canvas(container);
    this.snake = new Snake();
    this.berry = new Berry(this.canvas);
    this.score = new Score(".game-score .score-count", 0);
    new GameLoop(this.update.bind(this), this.draw.bind(this));
  }

  update() {
    this.snake.update(this.berry, this.score, this.canvas);
  }

  draw() {
    this.canvas.context.clearRect(
      0,
      0,
      this.canvas.element.width,
      this.canvas.element.height
    );

    this.snake.draw(this.canvas.context);
    this.berry.draw(this.canvas.context);
  }
}

new Game(document.querySelector(".canvas-wrapper"));

import Phaser from 'phaser'
import { clone } from 'lodash'
import globals from './globals/index'


export default class extends Phaser.State {
  init () {}

  preload () {
    
  }

  create () {
      let text = this.add.text(
          this.game.width * 0.5, this.game.height * 0.5,
          `Game Over!\n\nYou got to level ${this.game.global.level} with a score of ${this.game.global.score}\n\n(Click to play again)`,
          {
              font: '24px Verdana',
              fill: '#000',
              align: 'center'
          }
      )

      text.anchor.set(0.5)

      this.input.onDown.add(this.restartGame, this)
  }

  restartGame() {
      this.resetGlobalVariables()
      this.game.state.start('Game')
  }

  resetGlobalVariables() {
      this.game.global = clone(globals)
  }
}
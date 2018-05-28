import Phaser from 'phaser'

class Paddle extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'paddle')

        //set physics for this brick (pretty much saying "enable physics for this particular item")
        this.game.physics.arcade.enableBody(this)

        this.anchor.setTo(0.5, 0.5)

        this.body.immovable = true
    }


    update() {

        if (this.game.input.x === 0) {
            return
        }

        this.x = this.game.input.x

        if (this.x < this.width / 2) {
            this.x = this.width / 2
            return
        }

        if (this.x > this.game.width - this.width / 2) {
            this.x = this.game.width - this.width / 2
            return
        }
    }

}

export default Paddle
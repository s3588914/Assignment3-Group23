import Phaser from 'phaser'

class Ball extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'ball')

        //set physics for this brick (pretty much saying "enable physics for this particular item")
        this.game.physics.arcade.enableBody(this)

        this.checkWorldBounds = true
        this.body.collideWorldBounds = true

        this.body.bounce.set(1)

    }
}

export default Ball
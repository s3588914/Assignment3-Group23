import Phaser from 'phaser'

class Brick extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'brick')

        //set physics for this brick (pretty much saying "enable physics for this particular item")
        this.game.physics.arcade.enableBody(this)

        this.body.immovable = true
    }
}

export default Brick
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    music.powerDown.play()
    info.startCountdown(50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -120
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    music.powerDown.play()
    info.startCountdown(50)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    500,
    false
    )
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(2)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.ay = 200
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)

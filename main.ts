controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cave_man.vy == 0) {
        Cave_man.vy = -180
    }
})
let Cave_man: Sprite = null
scene.setBackgroundColor(9)
Cave_man = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . . d a d d a d . . . . . . 
    . . . . f d d d d f . . . . . . 
    . . . . f f f f f f . . . . . . 
    d d . . e e e e e e . . d d . . 
    d d d d e e e e e e d d d d . . 
    d d . . e e e e e e . . d d . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . d d d d d . . d d d d d . . . 
    . d d d d d . . d d d d d . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cave_man, 100, 0)
tiles.setTilemap(tilemap`level1`)
Cave_man.ay = 350
scene.cameraFollowSprite(Cave_man)

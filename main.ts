namespace SpriteKind {
    export const Magic = SpriteKind.create()
    export const Hay = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cave_man.vy == 0) {
        Cave_man.vy = -180
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Magic, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hay, function (sprite, otherSprite) {
    otherSprite.destroy()
    Angry_sky_sheep = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Angry_sky_sheep,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . . 3 . . . . 3 . . . . . . . 
        . . . f . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . 3 . . . . 3 . . . . . . . . 
        . f . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . . 3 . . . . 3 . . . . . . . 
        . . . f . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . 3 . . . . 3 . . . . . . . . 
        . f . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . . 3 . . . . 3 . . . . . . . 
        . . . f . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 1 1 1 1 1 1 3 3 3 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 2 3 f . . 
        . 1 1 1 1 1 1 1 1 3 3 3 3 f . . 
        . . . 1 1 1 1 1 1 f f f f . . . 
        . . . 3 1 1 1 1 3 . . . . . . . 
        . . 3 . . . . 3 . . . . . . . . 
        . f . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Angry_sky_sheep.setPosition(Cave_man.x + 80, Cave_man.y - 80)
    Angry_sky_sheep.follow(Cave_man)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Cave_man.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let Angry_sky_sheep: Sprite = null
let Hay: Sprite = null
let Magic: Sprite = null
let Cave_man: Sprite = null
scene.setBackgroundColor(9)
Cave_man = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . . f f d d a . . . . . . . 
    . . . . f d d f f . . . . . . . 
    . . . e e e e e e . . . . . . . 
    . . . e e d e e e . . . . . . . 
    . . . e e d e e e . . . . . . . 
    . . . e e d e e e . . . . . . . 
    . . . e d d d e e . . . . . . . 
    . . . e d d d e e . . . . . . . 
    . . . e e e e e e . . . . . . . 
    . . . d d . . d d . . . . . . . 
    . . . d d . . d d . . . . . . . 
    . . . d d . . d d . . . . . . . 
    . . . d d . . d d . . . . . . . 
    . . . d d d . d d d d . . . . . 
    . . . d d d . d d d d . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cave_man, 100, 0)
tiles.setTilemap(tilemap`level1`)
Cave_man.ay = 350
scene.cameraFollowSprite(Cave_man)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Magic = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a . . . . . . . a . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . a . . . a a c b a . . . a . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Magic)
    tiles.placeOnTile(Magic, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    Magic,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . a . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . a . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . a . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . a . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . a . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . a . . . a . a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . a . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . . a . a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . . . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . . a . a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a a a a a . . . . . 
        . . . . . a a c b a . . . . . . 
        . . . . . . a b c a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . . a . a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        Hay = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . 5 5 . . . . 
            . . . . 5 5 . 5 . 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 . 5 . 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Hay)
        tiles.placeOnTile(Hay, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
game.onUpdate(function () {
    Cave_man.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . . f f d d a . . . . . . . 
        . . . . f d d f f . . . . . . . 
        . . . e e e e e e . . . . . . . 
        . . . e e d e e e . . . . . . . 
        . . . e e d e e e . . . . . . . 
        . . . e e d e e e . . . . . . . 
        . . . e d d d e e . . . . . . . 
        . . . e d d d e e . . . . . . . 
        . . . e e e e e e . . . . . . . 
        . . . d d . . d d . . . . . . . 
        . . . d d . . d d . . . . . . . 
        . . . d d . . d d . . . . . . . 
        . . . d d . . d d . . . . . . . 
        . . . d d d . d d d d . . . . . 
        . . . d d d . d d d d . . . . . 
        `)
    if (Cave_man.vy < 0) {
        Cave_man.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f d a . . . . . . . 
            . . . . . f d f f . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e d e e . . . . . . 
            . . . . . e e d e e . . . . . . 
            . . . . . e e d e e . . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . d e e e e e d . . . . . 
            . . . d d d . . d d d . . . . . 
            . . d d . . . d d . . . . . . . 
            . . d . . . . d . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Cave_man.vx > 0) {
        Cave_man.setImage(img`
            . . . . . f f f f f . . . . . . 
            . . . . . f a d a f . . . . . . 
            d . . . f d d d d d f . . . d . 
            d d . . f f d d d f f . . d d . 
            . d d . . f f f f f . . d d . . 
            . . d d e e e e e e e d d . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . d d . . . d d . . . . . 
            . . . . d d . . . d d . . . . . 
            . . d d d d . . . d d d d . . . 
            . . d d d d . . . d d d d . . . 
            `)
    } else {
    	
    }
    if (Cave_man.vx < 0) {
        Cave_man.image.flipX()
    }
})

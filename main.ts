namespace SpriteKind {
    export const slime = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 2
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . 9 9 . . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 8 8 8 8 . . 
        . . 9 c c 9 . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . . . 9 9 . . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 8 8 8 8 . . 
        . . . . . c . . 
        `,img`
        . . . 9 9 . . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 8 8 8 8 . . 
        . . 9 c c 9 . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . . . 9 9 . . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 8 8 8 8 . . 
        . . c . . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (face == 2) {
        sword = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            . d d d d c c c . . . . . . . . 
            1 1 1 1 1 c c c . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            `, mySprite, 0, 0)
        sword.y += -8
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            . d d d d c c c . . . . . . . . 
            1 1 1 1 1 c c c . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 d . . . . . . . . . . . . . 
            . 1 1 d . . . . . . . . . . . . 
            . . 1 1 d . . . . . . . . . . . 
            . . . 1 1 d c c . . . . . . . . 
            . . . . 1 1 c . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . . c . c c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . 1 1 d . 
            . . . . . . . . . . . 1 1 d . . 
            . . . . . . . . c c 1 1 d . . . 
            . . . . . . . . . c 1 d . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . . c c c . c . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c . . . . . 
            . . . . . . . . c c c 1 1 1 1 1 
            . . . . . . . . c c c d d d d . 
            . . . . . . . . . . c . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
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
            `],
        50,
        false
        )
        timer.after(2500, function () {
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        })
    } else if (face == 0) {
        sword = sprites.createProjectileFromSprite(img`
            . 1 . . . . . . . . . . 
            . 1 d . . . . . . . . . 
            . 1 d . . . . . . . . . 
            . 1 d . . . . . . . . . 
            . 1 d . . . . . . . . . 
            c c c c . . . . . . . . 
            . c c . . . . . . . . . 
            . c c . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `, mySprite, 0, 0)
    } else if (face == 1) {
        sword = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . c c c c 
            . . . . . . . . . c c . 
            . . . . . . . . . c c . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        sword.x += -8
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . c c c c 
            . . . . . . . . . c c . 
            . . . . . . . . . c c . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . 1 1 . . . . . . 
            . . . . d 1 1 . . . . . 
            . . . . . d 1 1 . . . . 
            . . . . . . d 1 1 c c . 
            . . . . . . . d 1 c . . 
            . . . . . . . c c c c . 
            . . . . . . . c . c c c 
            . . . . . . . . . . c c 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . c . . . . . . 
            1 1 1 1 1 c c c . . . . 
            . d d d d c c c . . . . 
            . . . . . c . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . c c . 
            . . . . . . c . c c c . 
            . . . . . . c c c c . . 
            . . . . . . d 1 c . . . 
            . . . . . d 1 1 c c . . 
            . . . . d 1 1 . . . . . 
            . . . d 1 1 . . . . . . 
            . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . c c . 
            . . . . . . . . . c c . 
            . . . . . . . . c c c c 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . d 1 . 
            . . . . . . . . . . 1 . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `],
        50,
        false
        )
        timer.after(2500, function () {
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        })
    } else if (face == 3) {
        sword = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . c . . . . . 
            . . . . . . . . c c c 1 1 1 1 1 
            . . . . . . . . c c c d d d d . 
            . . . . . . . . . . c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        sword.y += 8
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . c . . . . . 
            . . . . . . . . c c c 1 1 1 1 1 
            . . . . . . . . c c c d d d d . 
            . . . . . . . . . . c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c c . c . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . . . . c 1 1 . . . . 
            . . . . . . . . c c d 1 1 . . . 
            . . . . . . . . . . . d 1 1 . . 
            . . . . . . . . . . . . d 1 1 . 
            . . . . . . . . . . . . . d 1 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . c . c c c . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . . d 1 c . . . . . . . . . 
            . . . d 1 1 c c . . . . . . . . 
            . . d 1 1 . . . . . . . . . . . 
            . d 1 1 . . . . . . . . . . . . 
            . 1 1 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            . d d d d c c c . . . . . . . . 
            1 1 1 1 1 c c c . . . . . . . . 
            . . . . . c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        timer.after(2500, function () {
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    face = 3
    mySprite.setImage(img`
        . . . 9 9 . . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . f 6 6 f . . 
        . . f f f f . . 
        . . 8 8 8 8 . . 
        . . c 8 8 c . . 
        . . c . . c . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 . 
        . . f 6 f 6 . 9 
        . . f f f 6 . . 
        . . 8 8 8 9 . . 
        . . 8 c 9 c . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 . 
        . . f 6 f 6 . 9 
        . . f f f 6 . . 
        . . 8 8 9 9 . . 
        . . . c . c . . 
        `,img`
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 . 
        . . f 6 f 6 . 9 
        . . f f f 6 . . 
        . . 8 8 8 9 . . 
        . . 8 c 9 c . . 
        . . . c c . . . 
        `,img`
        . . . . . . . . 
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 9 
        . . f 6 f 6 . . 
        . . f f f 6 . . 
        . . 8 8 8 9 . . 
        . . . c . . . . 
        `,img`
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 . 
        . . f 6 f 6 . 9 
        . . f f f 6 . . 
        . . 8 8 8 9 . . 
        . . 8 c 9 c . . 
        . . . . c c . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.loadMap(tilemapList._pickRandom())
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    for (let index = 0; index < randint(3, 6); index++) {
        slime = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . f f f . . 
            . . f 6 6 1 f . 
            . f 6 6 6 6 1 f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            . f f f f f f . 
            `, SpriteKind.slime)
        tiles.placeOnRandomTile(slime, assets.tile`myTile`)
        slime_move()
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    face = 0
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        . 9 6 6 6 6 . . 
        9 9 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 8 8 8 . . 
        . . c 9 c 8 . . 
        . . c . . c . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    face = 1
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . 9 9 9 . 
        . . 6 6 6 6 9 . 
        . . 6 6 6 6 9 . 
        . . f 6 f 6 9 9 
        . . f f f 6 . . 
        . . 8 8 8 9 . . 
        . . 8 c 9 c . . 
        . . c . . c . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        . 9 6 6 6 6 . . 
        9 . 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 8 8 8 . . 
        . . c 9 c 8 . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        . 9 6 6 6 6 . . 
        9 . 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 9 8 8 . . 
        . . c . c . . . 
        `,img`
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        . 9 6 6 6 6 . . 
        9 . 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 8 8 8 . . 
        . . c 9 c 8 . . 
        . . . c c . . . 
        `,img`
        . . . . . . . . 
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        9 9 6 6 6 6 . . 
        . . 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 8 8 8 . . 
        . . . . c . . . 
        `,img`
        . 9 9 9 . . . . 
        . 9 6 6 6 6 . . 
        . 9 6 6 6 6 . . 
        9 . 6 f 6 f . . 
        . . 6 f f f . . 
        . . 9 8 8 8 . . 
        . . c 9 c 8 . . 
        . . c c . . . . 
        `],
    100,
    true
    )
})
function smartfollowing () {
    if (true) {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    face = 2
    mySprite.setImage(img`
        . . . 9 9 . . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 6 9 9 6 . . 
        . . 8 8 8 8 . . 
        . . 9 c c 9 . . 
        . . c . . c . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 3
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . 9 9 . . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . f 6 6 f . . 
        . . f f f f . . 
        . . 8 8 8 8 . . 
        . . c 8 8 c . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . . . 9 9 . . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . f 6 6 f . . 
        . . f f f f . . 
        . . c 8 8 8 . . 
        . . . . . c . . 
        `,img`
        . . . 9 9 . . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . f 6 6 f . . 
        . . f f f f . . 
        . . 8 8 8 8 . . 
        . . c 8 8 c . . 
        . . c . . c . . 
        `,img`
        . . . . . . . . 
        . . . 9 9 . . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . f 6 6 f . . 
        . . f f f f . . 
        . . 8 8 8 c . . 
        . . c . . . . . 
        `],
    100,
    true
    )
})
function slime_move () {
	
}
let slime: Sprite = null
let sword: Sprite = null
let mySprite: Sprite = null
let face = 0
let tilemapList: tiles.WorldMap[] = []
tilemapList = [
tiles.createSmallMap(tilemap`level4`),
tiles.createSmallMap(tilemap`level9`),
tiles.createSmallMap(tilemap`level5`),
tiles.createSmallMap(tilemap`level6`),
tiles.createSmallMap(tilemap`level7`),
tiles.createSmallMap(tilemap`level8`)
]
face = 0
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
mySprite = sprites.create(img`
    . 9 9 9 . . . . 
    . 9 6 6 6 6 . . 
    . 9 6 6 6 6 . . 
    9 9 6 f 6 f . . 
    . . 6 f f f . . 
    . . 9 8 8 8 . . 
    . . c 9 c 8 . . 
    . . c . . c . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
game.onUpdate(function () {
    if (sword != null) {
        if (face == 2) {
            sword.setPosition(mySprite.x, mySprite.y - 8)
        } else if (face == 0) {
            sword.setPosition(mySprite.x + 8, mySprite.y)
        } else if (face == 1) {
            sword.setPosition(mySprite.x - 8, mySprite.y)
        } else if (face == 3) {
            sword.setPosition(mySprite.x, mySprite.y + 8)
        }
    }
})

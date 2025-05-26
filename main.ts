let projectile: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 . 3 . 3 . . . . . . 
    . . . . . . 3 4 3 . . . . . . . 
    . . . . . 3 4 4 4 3 . . . . . . 
    . . . . . . 3 4 3 . . . . . . . 
    . . . . . 3 . 3 7 3 . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f . f f . . . . . 
        . . . . . . . . f . f . . . . . 
        . . . . . . . f 4 f 4 f . . . . 
        . . . . . . f f 4 f 4 f f . . . 
        . . . . . . f f 4 f 4 f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})

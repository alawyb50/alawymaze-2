scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 8 8 8 8 8 8 e e f . . 
. . f e 8 f f f f f f 8 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 8 8 8 8 8 8 f 4 e . . 
. . 4 d f 8 8 8 8 8 8 f d 4 . . 
. . 4 4 f e e e e e e f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(13)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101020404060401010604040404040601010204040604010104010101010104010101010101040101040104060601040101010101010401010401040501010401010101010104010104010404040406010101010101040101040101010101010101060404040604040604040404040401010101010101010401010401010101040101010101010104010104010104040401010606060101040101040404010104010106050101010401010401010101040101040101010504010104040404040401010404040404040101040101040101010101010101010101010401010601010104040404060404040404010106060603`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 . . . . . . . 2 2 
. . . . . 2 2 . 2 2 2 2 2 . 2 2 
2 2 2 2 . 2 2 . 2 . . . 2 . 2 2 
2 2 2 2 . 2 2 . 2 . 2 2 2 . 2 2 
2 2 2 2 . 2 2 . 2 . . . . . 2 2 
2 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 . 2 2 . 2 2 2 2 . 2 
2 2 2 2 2 2 . 2 2 . 2 2 . . . 2 
2 . . . 2 2 . 2 2 . . . 2 2 . 2 
2 . 2 2 2 2 . 2 2 . 2 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 . . . . . . 2 
2 . . . . . . 2 2 . 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 
. . . . . . . . . . 2 2 . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairEast,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,myTiles.tile3], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
info.setScore(0)
info.startCountdown(10)

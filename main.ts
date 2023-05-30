namespace SpriteKind {
    export const ArrowLine = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        for (let value of sprites.allOfKind(3)) {
            if (value.image.clone().equals(assets.image`myImage2`)) {
                if (value.bottom > mySprite.top) {
                    buttonPressed1 = true
                    sprites.destroy(value)
                    blockCreateSpeed += -15
                    blockSpeed += 1
                    overlap1 = true
                }
            }
        }
        if (!(overlap1)) {
            info.changeLifeBy(-1)
            playNote2()
        }
        overlap1 = false
    }
})
sprites.onDestroyed(3, function (sprite) {
    if (!(buttonPressed1)) {
        info.changeLifeBy(-1)
        playNote2()
    } else {
        info.changeScoreBy(1)
        playNote()
    }
    buttonPressed1 = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(gameStarted)) {
        backgroundMusicOn = false
        game.setDialogCursor(assets.image`myImage`)
        game.setDialogFrame(img`
            b b b b b b b b b b b b b b b 
            b d d d d d d d d d d d d d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d 6 6 6 6 6 6 6 6 6 6 6 d b 
            b d d d d d d d d d d d d d b 
            b b b b b b b b b b b b b b b 
            `)
        game.setDialogTextColor(1)
        game.showLongText("In this fun, musical game, your goal is to hit the correct arrow key the moment a box hits the red line. See how fast you can go! Each time you get it correct, the boxes fall faster.", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(4)
        mySprite = sprites.create(img`
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `, 1)
        mySprite.setPosition(80, 116)
        mySprite2.destroy()
        music.playMelody("C - C G C5 - - - ", 180)
        info.setLife(3)
        textSprite.setFlag(SpriteFlag.Invisible, false)
        pause(2000)
        blockCreateSpeed = 1500
        gameStarted = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        for (let value of sprites.allOfKind(3)) {
            if (value.image.clone().equals(assets.image`myImage1`)) {
                if (value.bottom > mySprite.top) {
                    buttonPressed1 = true
                    sprites.destroy(value)
                    blockCreateSpeed += -15
                    blockSpeed += 1
                    overlap1 = true
                }
            }
        }
        if (!(overlap1)) {
            info.changeLifeBy(-1)
            playNote2()
        }
        overlap1 = false
    }
})
function playNote2 () {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
}
function playNote () {
    if (noteList.length > 0) {
        music.play(music.stringPlayable(noteList.shift(), 120), music.PlaybackMode.UntilDone)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        for (let value of sprites.allOfKind(3)) {
            if (value.image.clone().equals(assets.image`myImage0`)) {
                if (value.bottom > mySprite.top) {
                    buttonPressed1 = true
                    sprites.destroy(value)
                    blockCreateSpeed += -15
                    blockSpeed += 1
                    overlap1 = true
                }
            }
        }
        if (!(overlap1)) {
            info.changeLifeBy(-1)
            playNote2()
        }
        overlap1 = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        for (let value of sprites.allOfKind(3)) {
            if (value.image.clone().equals(assets.image`myImage3`)) {
                if (value.bottom > mySprite.top) {
                    buttonPressed1 = true
                    sprites.destroy(value)
                    blockCreateSpeed += -15
                    blockSpeed += 1
                    overlap1 = true
                }
            }
        }
        if (!(overlap1)) {
            info.changeLifeBy(-1)
            playNote2()
        }
        overlap1 = false
    }
})
function start () {
    scene.setBackgroundColor(12)
    mySprite2 = sprites.create(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddddddddd1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddddddddd1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccffffffcccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddddddbb1ddddddddddddddd1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccffcffccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddbbbb1dddddddddddddd1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddbbbb1dddddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccfffcccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddddbbb1bb1ddddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccfffcccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddddbb1dbb1ddddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccffffccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddddbb1dbb1ddddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccfffccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddddb1dddb1ddddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccfffccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddbb1dddbb1dddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccfffccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddbbbbbbbb1dddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccffccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddbbb111bb1dddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccfffcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddbbb1ddd1bb1ddddddddddd1ccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccfffcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddddbb1dddddbb1ddddddddddd1cccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccffcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddbbb1dddddbbb1dddddddddd1cccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccfffccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddbbb1dddddbbb1dddddddddd1cccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccfffccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1ddddddd1111ddddd1111dddddddddd1cccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccffffcccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddddddddd1cccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccffffcccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddddddddd1cccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccfffcccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddddddddd1ccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccffffcccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccfffffccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccfffffccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccffffffccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccffffffccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccccccccfffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccfffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccffffffffffccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccccccccccccccccccfffffffffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccffffffffccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccccccccccccccccccccffffcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffcccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffccccccffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccffffffffcccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, 0)
    mySprite2.z = -10
    textSprite = textsprite.create("Beginner", 0, 6)
    textSprite.setFlag(SpriteFlag.Invisible, true)
    backgroundMusicOn = true
    scoreCheck = 0
    list = [
    assets.image`myImage0`,
    assets.image`myImage1`,
    assets.image`myImage2`,
    assets.image`myImage3`
    ]
    song = "cdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedcedcdedefedcdedced"
    noteList = [""]
    noteList.shift()
    for (let index = 0; index <= song.length - 1; index++) {
        noteList.push(song.charAt(index))
    }
}
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let song = ""
let list: Image[] = []
let scoreCheck = 0
let noteList: string[] = []
let textSprite: TextSprite = null
let mySprite2: Sprite = null
let backgroundMusicOn = false
let overlap1 = false
let blockCreateSpeed = 0
let buttonPressed1 = false
let mySprite: Sprite = null
let gameStarted = false
let noteSpeedbpm = 200
let blockSpeed = 50
start()
game.onUpdate(function () {
    if (gameStarted) {
        timer.throttle("action", blockCreateSpeed, function () {
            mySprite3 = sprites.create(list[randint(0, list.length - 1)], 3)
            mySprite3.setPosition(randint(30, 130), 0)
            mySprite3.setVelocity(0, blockSpeed)
            mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
        })
    }
})
forever(function () {
    if (info.score() == 20) {
        if (scoreCheck == 0) {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Easy", 0, 7)
            scoreCheck = 1
        }
    } else if (info.score() == 40) {
        if (scoreCheck == 1) {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Medium", 0, 5)
            scoreCheck = 2
        }
    } else if (info.score() == 60) {
        if (scoreCheck == 2) {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Hard", 0, 2)
            scoreCheck = 3
        }
    } else if (info.score() == 75) {
        if (scoreCheck == 3) {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Expert", 0, 10)
            scoreCheck = 4
        }
    } else if (info.score() == 85) {
        if (scoreCheck == 4) {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Impossible", 0, 15)
            scoreCheck = 0
        }
    }
    textSprite.setPosition(80, 10)
})
forever(function () {
    if (backgroundMusicOn) {
        timer.throttle("action0", 1500, function () {
            mySprite4 = sprites.create(assets.image`myImage4`, 4)
            mySprite4.setPosition(scene.cameraProperty(CameraProperty.X) + 20, 0)
            mySprite4.setVelocity(0, 50)
            mySprite4.setFlag(SpriteFlag.AutoDestroy, true)
        })
    }
})
game.onUpdateInterval(10000, function () {
    if (gameStarted) {
        info.changeLifeBy(1)
    }
})

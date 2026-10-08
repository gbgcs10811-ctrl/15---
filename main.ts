let alarmOn = false

input.onButtonPressed(Button.A, function () {
    if (alarmOn) {
        alarmOn = false
        music.stopAllSounds()
        basic.clearScreen()
    }
})

basic.forever(function () {
    if (!alarmOn) {
        // 15초 기다리기
        basic.pause(15000)

        // 알람 시작
        alarmOn = true
        basic.showIcon(IconNames.Surprised)

        // 알람 소리를 반복해서 재생
        music.beginMelody(
            music.builtInMelody(Melodies.Prelude),
            MelodyOptions.ForeverInBackground
        )
    } else {
        basic.pause(100)
    }
})

	


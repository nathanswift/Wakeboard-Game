window.wakeboarder.game = {
    load: function () {
        console.log('Game loaded!');
        wakeboarder.game.controls();
    },
    controls: function () {
        document.addEventListener('keydown', function () {
            if (event.keyCode === 37) {
                // left
            } else if (event.keyCode === 39) {
                // right
            } else if (event.keyCode === 32) {
                // space
            }
        });
    }
}
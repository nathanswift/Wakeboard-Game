window.wakeboarder.controls = {
    menu: function() {
        var btns = document.querySelectorAll('div#menu div.btn');
        for (var x = 0, max = btns.length; x < max; x++) {
            var btn = btns[x];
            btn.addEventListener('click', function() {
                var method = this.getAttribute('data-method');
                if (method === 'start') {
                    wakeboarder.load('game');
                } else {
                    alert('You thought this would work? Haha!')
                }
            });
        }
    },
    game: function () {
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

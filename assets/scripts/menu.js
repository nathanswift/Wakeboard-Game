window.wakeboarder.menu = {
    load: function () {
        wakeboarder.menu.controls();
    },
    controls: function () {
        var btns = document.querySelectorAll('div#menu div.btn');
        for (var x = 0, max = btns.length; x < max; x++) {
            var btn = btns[x];
            btn.addEventListener('click', function () {
                var method = this.getAttribute('data-method');
                if (method === 'start') {
                    wakeboarder.load('game');
                } else {
                    alert('You thought this would work? Haha!')
                }
            });
        }
    }
}
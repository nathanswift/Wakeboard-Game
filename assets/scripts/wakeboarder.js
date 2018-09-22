window.wakeboarder = {
    init: function () {
        wakeboarder.load('menu');
    },
    scene: function (id) {
        // hide all scenes
        var elems = document.getElementsByClassName('scene');
        for (var x = 0, max = elems.length; x < max; x++) {
            var elem = elems[x];
            elem.style.display = 'none';
        }
        // show selected scene
        document.getElementById(id).style.display = 'block';
    }
}
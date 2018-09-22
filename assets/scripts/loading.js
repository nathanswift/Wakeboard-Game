window.wakeboarder.load = function(id) {
    wakeboarder.scene('loading');
    var load = setInterval(function() {
        wakeboarder[id].load();
        wakeboarder.scene(id);
        clearInterval(load);
    }, 500);
}
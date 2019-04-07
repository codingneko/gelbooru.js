var nw = require('nw.gui');
var fs = require('fs');
var win = nw.Window.get();

document.getElementById("close").addEventListener("click", function(){
    win.close();
});

document.getElementById("minimize").addEventListener("click", function(){
    win.minimize();
});

document.getElementById("maximize").addEventListener("click", function(){
    if (win.isMaximized)
        win.restore();
    else
        win.maximize();
});

win.on('maximize', function(){
    win.isMaximized = true;
});

win.on('restore', function(){
    win.isMaximized = false;
});
		
nw.Window.get().on('new-win-policy', function(frame, url, policy) {
    policy.ignore();
    nw.Shell.openExternal(url);
});

win.resizeTo(800, 600);
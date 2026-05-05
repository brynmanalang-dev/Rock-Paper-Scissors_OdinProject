const bgMusicmm = new Audio("../sfx/bgMusicmm.mp3")

bgMusicmm.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgMusicmm.play();
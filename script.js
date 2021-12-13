//navbar
const toggleBtn = document.getElementById('navToggle');
const navElement = document.getElementsByTagName('nav')[0];

toggleBtn.addEventListener('click', () => navElement.classList.toggle('opened'));

//media controls
const media = document.getElementById('bg_video');
const muteIcon = document.getElementById('mute')?.children[0];
const replayIcon = document.getElementById('replay')?.children[0];

media?.play();

replayIcon?.addEventListener('click', () => media.currentTime = 0);

muteIcon?.addEventListener('click', () => {
    if(media.muted) {
        media.muted = false;
        muteIcon.classList = 'fi fi-volume-down'
    }
    else {
        media.muted = true;
        muteIcon.classList = 'fi fi-volume-mute';
    }
});

//gallery
const pictures = document.querySelectorAll('.gallery picture img');

console.log(pictures);

for(p of pictures) {
    p.addEventListener('click', toggleFullscreen);
}
function toggleFullscreen(e) {
    const elem = e.target;
    if(isFullscreen())
        closeFullscreen();
    else
        openFullscreen(elem);
}
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
function isFullscreen() {
    return document.isFullScreen ||
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;
}
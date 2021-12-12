//navbar
const toggleBtn = document.getElementById('navToggle');
const navElement = document.getElementsByTagName('nav')[0];

toggleBtn.addEventListener('click', () => navElement.classList.toggle('opened'));

//media controls
const media = document.getElementById('bg_video');
const muteIcon = document.getElementById('mute').children[0];
const replayIcon = document.getElementById('replay').children[0];

replayIcon.addEventListener('click', () => media.currentTime = 0);

muteIcon.addEventListener('click', () => {
    if(media.muted) {
        media.muted = false;
        muteIcon.classList = 'fi fi-volume-down'
    }
    else {
        media.muted = true;
        muteIcon.classList = 'fi fi-volume-mute';
    }
});
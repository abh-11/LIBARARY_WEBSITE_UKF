document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const waves = document.querySelectorAll('.wave');
    
    // Try to autoplay (may be blocked by browser)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Auto-play was prevented, show paused state
            playPauseBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            waves.forEach(wave => wave.style.animationPlayState = 'paused');
        });
    }
    
    // Toggle play/pause on button click
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            waves.forEach(wave => wave.Audio_1.animationPlayState = 'running');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            waves.forEach(wave => wave.Audio_1.animationPlayState = 'paused');
        }
    });
    
    // Visual feedback for audio playing
    audio.addEventListener('play', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        waves.forEach(wave => wave.style.animationPlayState = 'running');
    });
    
    audio.addEventListener('pause', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        waves.forEach(wave => wave.Audio_1.animationPlayState = 'paused');
    });
});
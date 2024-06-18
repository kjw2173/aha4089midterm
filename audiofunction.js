function playSound(audioId) {
    var audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    } else {
        console.error("Audio element not found for ID: " + audioId);
    }
}

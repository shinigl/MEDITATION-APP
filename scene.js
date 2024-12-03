// Open the modal when a card is clicked
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Play or pause the video
function playPause(videoId) {
    const video = document.getElementById(videoId);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Set the video duration (for example, set it to loop for 10 minutes)
function setVideoDuration(videoId) {
    const video = document.getElementById(videoId);
    const duration = 600; // 10 minutes in seconds
    setTimeout(() => {
        video.pause();
        alert('Video has stopped after 10 minutes.');
    }, duration * 1000);
}

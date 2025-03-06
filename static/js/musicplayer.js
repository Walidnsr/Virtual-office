document.addEventListener("DOMContentLoaded", () => {
    const playButtons = document.querySelectorAll(".play-button");
    const audioPlayer = new Audio();
    let currentTrackIndex = 0;
    let trackList = [];
    
    // Récupérer toutes les pistes disponibles
    document.querySelectorAll(".track-item").forEach((track, index) => {
        trackList.push({
            url: track.getAttribute("data-preview"),
            title: track.querySelector(".track-title").innerText,
            artist: track.querySelector(".track-artist").innerText,
            cover: track.querySelector(".track-image").src,
            element: track
        });
    });
    
    function updatePlayerUI(track) {
        document.querySelector(".custom-audio-player").style.display = "flex";
        document.querySelector(".custom-audio-player img").src = track.cover;
        document.querySelector(".custom-audio-player .track-title").innerText = track.title;
        document.querySelector(".custom-audio-player .track-artist").innerText = track.artist;
    }

    function playTrack(index) {
        const track = trackList[index];
        if (!track) return;
        
        audioPlayer.src = track.url;
        audioPlayer.play();
        currentTrackIndex = index;
        updatePlayerUI(track);
    }

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    function playNext() {
        currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
        playTrack(currentTrackIndex);
    }

    function playPrev() {
        currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
        playTrack(currentTrackIndex);
    }

    function updateProgress() {
        const progressBar = document.querySelector(".progress");
        progressBar.style.width = (audioPlayer.currentTime / audioPlayer.duration) * 100 + "%";
    }

    playButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => playTrack(index));
    });

    document.getElementById("play-pause-button").addEventListener("click", togglePlayPause);
    document.getElementById("next-button").addEventListener("click", playNext);
    document.getElementById("prev-button").addEventListener("click", playPrev);

    audioPlayer.addEventListener("timeupdate", updateProgress);
});

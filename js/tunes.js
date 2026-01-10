const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "song1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "song2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "song3.mp3" }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    trackName.textContent = song.title;
    trackArtist.textContent = song.artist;
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
previousButton.addEventListener('click', previousSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Load the first song
loadSong(songs[currentSongIndex]);

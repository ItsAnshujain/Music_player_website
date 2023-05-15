const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        "name": "01",
        "title": "Mehsoos huaa",
        "artist": "Jubin Notiyal",
    },
    {
        "name": "02",
        "title": "Tota Jo Kabhi Tara",
        "artist": "Atif aslam",
    },
    {
        "name": "03",
        "title": "Bareilly ke bazaar",
        "artist": "Tanishk Bagchi",
    }
];

let isPlaying = false;
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});


const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};
songIndex = 0;
const prevMusic = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}
const nextMusic = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}
prev.addEventListener("click", prevMusic);
next.addEventListener("click", nextMusic);


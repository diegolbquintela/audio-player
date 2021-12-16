"use strict";
const songs = [
  {
    id: 1,
    title: "Parker's Mood (New take 1)",
    artist: "Charlie Parker",
    album: "Charlie Parker Memorial vol 1",
    duration: "3:27",
    name: "Parker's Mood - Charlie Parker All Stars",
  },
  {
    id: 2,
    title: "Just Friends",
    artist: "Charlie Parker",
    album: "April in Paris: The Genius of Charlie Parker vol 2",
    duration: "3:32",
    name: "06 Just Friends",
  },
  {
    id: 3,
    title: "Footprints",
    artist: "Miles Davis",
    album: "Miles Smiles",
    duration: "9:49",
    name: "03 - Footprints [9.56] (stereo)",
  },
  {
    id: 4,
    title: "Nefertiti",
    artist: "Miles Davis",
    album: "Nefertiti",
    duration: "7:51",
    name: "01 - Nefertiti [7.54]",
  },
  {
    id: 5,
    title: "All Blues",
    artist: "Miles Davis",
    album: "Miles Davis",
    duration: "11:16",
    name: "All Blues",
  },
  ,
  {
    id: 6,
    title: "Everything Happens to Me",
    artist: "Charlie Parker",
    album: "April in Paris: The Genius of Charlie Parker vol 2",
    duration: "3:32",
    name: "05 Everything Happens to Me",
  },
];

const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const progressBar = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const previousBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

// conditional statement: check if it is playing
let isPlaying = false;

// play functionality
const playSong = () => {
  isPlaying = true;
  music.play();
};

// pause
const pauseSong = () => {
  isPlaying = false;
  music.pause();
};

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// update UI
const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `songs/${songs.name}.mp3`;
  image.src = `images/${songs.artist}.jpg`;
};

// current song
let songIndex = 0;

// selecting song to load
loadSongs(songs[songIndex]);

// previous song
previousBtn.addEventListener("click", () => {
  songIndex < 0 ? (songIndex = songs.length - 1) : songIndex--;
  loadSongs(songs[songIndex]);
  playSong();
});

//next song
nextBtn.addEventListener("click", () => {
  songIndex > songs.length - 1 ? (songIndex = 0) : songIndex++;
  loadSongs(songs[songIndex]);
  playSong();
});

// update progress bar
music.addEventListener("timeupdate", (e) => {
  if (isPlaying) {
    console.log(e);
    const { duration, currentTime } = e.target;
    console.log(duration, currentTime);

    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
});

/* Randomize array in-place using Durstenfeld shuffle algorithm */
//   function shuffleArray(songs) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
//

// need to add an updateUi function

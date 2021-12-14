"use strict";

const song1 = {
  id: 1,
  title: "Parker's Mood (New take 1)",
  artist: "Charlie Parker",
  album: "Charlie Parker Memorial vol 1",
  duration: "3:27",
};

const song2 = {
  id: 2,
  title: "Just Friends",
  artist: "Charlie Parker",
  album: "April in Paris: The Genius of Charlie Parker vol 2",
  duration: "3:32",
};

const song3 = {
  id: 3,
  title: "Kim (alternate take)",
  artist: "Charlie Parker Quartet",
  album: "Charlie Parker",
  duration: "2:58",
};

const song4 = {
  id: 4,
  title: "Footprints",
  artist: "Miles Davis",
  album: "Miles Smiles",
  duration: "9:49",
};

const song5 = {
  id: 5,
  title: "Nefertiti",
  artist: "Miles Davis",
  album: "Nefertiti",
  duration: "7:51",
};
const song6 = {
  id: 6,
  title: "Bag's Groove (Take 1)",
  artist: "Miles Davis",
  album: "Bag's Groove Remastered",
  duration: "11:16",
};

const songs = [song1, song2, song3, song4, song5, song6];

const containerSongs = document.querySelector(".container-test");

const songId = document.querySelector(".song-id");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const songAlbum = document.querySelector(".song-album");
const songDuration = document.querySelector(".song-duration");

//action buttons
const buttonRandom = document.querySelector(".button-random");

containerSongs.innerHTML = "";

// display songs

// songs.forEach((song) => {
//   const html = `
//     <p class="songlist-songs song-title">${song.title}</p>
//     <p class="songlist-songs song-artist">${song.artist}</p>
//     <p class="songlist-songs song-album">${song.album}</p>
//     <p class="songlist-songs song-duration">${song.duration}</p>
//     `;

//   containerSongs.insertAdjacentHTML("afterbegin", html);
// });

//buttons functionality

//random (shuffle)
buttonRandom.addEventListener("click", (e) => {
  console.log("clicked");
  //reload page

  // window.location.reload();

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(songs) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
});

// need to add an updateUi function

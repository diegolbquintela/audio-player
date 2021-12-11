"use strict";

const song1 = {
  id: 1,
  title: "Parker's Mood (New take 1)",
  artist: "Charlie Parker",
  album: "Charlie Parker Memorial vol 1",
  duration: 3.27,
};

const song2 = {
  id: 2,
  title: "Just Friends",
  artist: "Charlie Parker",
  album: "April in Paris: The Genius of Charlie Parker vol 2",
  duration: 3.32,
};

const song3 = {
  id: 3,
  title: "Kim (alternate take)",
  artist: "Charlie Parker Quartet",
  album: "Charlie Parker",
  duration: 2.58,
};

const songs = [song1, song2, song3];

const containerSongs = document.querySelector(".container-test");

const songId = document.querySelector(".song-id");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const songAlbum = document.querySelector(".song-album");
const songDuration = document.querySelector(".song-duration");

containerSongs.innerHTML = "";

// display songs
songs.forEach((song) => {
  const html = `
    <p class="songlist-songs song-id">${song.id}</p>
    <p class="songlist-songs song-title">${song.title}</p>
    <p class="songlist-songs song-artist">${song.artist}</p>
    <p class="songlist-songs song-album">${song.album}</p>
    <p class="songlist-songs song-duration">${song.duration}</p>
    `;

  containerSongs.insertAdjacentHTML("afterbegin", html);
});

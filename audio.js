let data = {
    title: [
        "Aram Asatryan - Es qez shat shat shat sirum em",
        "311_-_However_far_away_I_will_always_love_you",
        "Aram Asatryan  - Anna",
        "Aram Asatryan  - Matis Matniq.",
        "Aram Asatryan  - Sev acher",
        "ram Asatryan - Drakhti Peri",
        "Aram Asatryan - Srjaran",
        "Ministry_Of_Magic_-_However_Far_Away_",
        "Niyaz_-_In_The_Shadow_Of_Life_",



    ],

    song: [
        "music/ Aram Asatryan  - Es qez shat shat shat sirum em.mp3",
        "music/311_-_However_far_away_I_will_always_love_you_(mp3.pm).mp3",
        "music/Aram Asatryan  - Anna.mp3",
        "music/Aram Asatryan  - Matis Matniq.mp3",
        "music/Aram Asatryan  - Sev acher.mp3",
        "music/Aram Asatryan - Drakhti Peri.mp3",
        "music/Aram Asatryan - Srjaran.mp3",
        "music/Ministry_Of_Magic_-_However_Far_Away_(mp3.pm).mp3",
        "music/Niyaz_-_In_The_Shadow_Of_Life_(mp3.pm).mp3",
    ],

    poster: [
        "https://cdn-images.dzcdn.net/images/cover/8e48c33cef255ff04f012e469a8004ba/0x1900-000000-80-0-0.jpg",
        "https://i.ytimg.com/vi/PGmHBwgO3jA/maxresdefault.jpg",
        "https://music.gisher.me/public/covers/149/273.webp",
        "https://music.gisher.me/public/covers/149/271.webp",
        "https://i.ytimg.com/vi/ZdtYRGVg-d0/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AG-B4AC0AWKAgwIABABGH8gSSgqMA8=&rs=AOn4CLAUokF5DWUMox6mK-qD_Aq3YI-8eg",
        "https://i.ytimg.com/vi/G_ddlPwYH5I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNQu9FKzlz3iG6V6WaAd2R5C1PGg",
        "https://music.gisher.me/public/covers/149/285.webp",
        "https://i.scdn.co/image/ab67616d0000b273e44109770565bd58df255039",
        "https://i.scdn.co/image/ab67616d0000b2738fd31abb6f008f04b922c668",
    ]
}

let song = new Audio()
let currentSong = 0

window.onload = function () {
    playSong()

}

function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    
    songTitle.textContent = data.title[currentSong]
    
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    console.log(img[0]);
    
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play()
    }


function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"

    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }

}


song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration
    fill.style.width = position * 100 + "%"
    convertTime(song.currentTime)
    totalTime(Math.round(song.duration))

    if (song.ended) {
        next()
    }
})



function convertTime(seconds) {
    let currentTime = document.getElementById("currrentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime.textContent = min + " : " + sec
}

function totalTime(seconds) {
    let currentTime = document.getElementById("currrentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime.textContent += " / " + min + " : " + sec
}

function next() {
    currentSong++;
    if (currentSong > data.song.length) {
        currentSong = 0;
    }
    playSong();
    play.src = "images/pause.png"
}


function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}

function mute() {
    let mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else {
        song.muted = true
        mute.src = "images/volume-mute.png"

    }
}

function decrease (){
    let mute = document.getElementById("mute")
      song.volume -= 0.2

      if (song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
      }
    }

      function increase (){
        let mute = document.getElementById("mute")
        song.volume += 0.2
 
      if (song.volume >= 0.2) {
          mute.src = "images/volume.png"
      }
}
const content = document.querySelector(".content"),
Playimage = content.querySelector(".music-image img"),
musicName = content.querySelector(".music-titles .name"),
musicArtist  = content.querySelector(".music-titles .artist"),
Audio = document.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),
prevBtn = content.querySelector("#backward"),
nextBtn = content.querySelector("#forward"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector(".progress-details");

let index = 1;

window.addEventListener("load", ()=>{
    loadData(index);
    Audio.play();
});

function loadData(indexValue){
    musicName.innerHTML = songs[indexValue - 1].name;
    musicArtist.innerHTML = songs[indexValue - 1].artist;
    Playimage.src = "images/" + songs[indexValue - 1].img + ".jpg";
    Audio.src = "Songs/" + songs[indexValue - 1].audio + ".mp3";
}

playBtn.addEventListener("click", ()=>{
    const isMusicPaused = content.classList.contains("paused");
    if(isMusicPaused){
        pauseSong();
    }
    else{
        palySong();
    }
});

function playSong(){
    content.classList.add("paused");
    playBtnIcon.innerHTML = "pause";
    Audio.play();
}

function pauseSong(){
    content.classList.remove("paused");
    playBtnIcon.innerHTML = "fa-play";
    Audio.pause();
}

nextBtn.addEventListener("click", ()=>{
    nextSong();
});

function nextSong(){
    index++;
    if(index > songs.length){
        index = 1;
    }
    else{
        index = index;
    }
    loadData(index);
    palySong();
}

prevBtn.addEventListener("click", ()=>{
    prevSong();
});

function prevBtn(){
    index--;
    if(index <= 0){
        index =songs.length;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}


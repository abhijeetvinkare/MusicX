const songs = {
    bollywood: [
        { name: "Akhiyaan", src: "/songs/bollywood/Akhiyaan.mp3", imageSrc: "/images/songs/bollywood/ankhiyan.png" },
        { name: "Barbaadiyan", src: "/songs/bollywood/Barbaadiyan.mp3", imageSrc: "/images/songs/bollywood/barbadiyaan.jpg" },
        { name: "Chaleya", src: "/songs/bollywood/Chaleya.mp3", imageSrc: "/images/songs/bollywood/chaleya.png" },
        { name: "Deva Deva", src: "/songs/bollywood/Deva Deva.mp3", imageSrc: "/images/songs/bollywood/deva deva.jpg" },
        { name: "Dj Brazil", src: "/songs/bollywood/Dj Brazil.mp3", imageSrc: "/images/songs/bollywood/djbrazil.jpg" },
        { name: "Kesariya", src: "/songs/bollywood/Kesariya .mp3", imageSrc: "/images/songs/bollywood/keasraiya.jpg" },
        { name: "Mahi", src: "/songs/bollywood/Mahi.mp3", imageSrc: "/images/songs/bollywood/mahi.png" },
        { name: "O Sajna", src: "/songs/bollywood/O Sajna.mp3", imageSrc: "/images/songs/bollywood/o sajna.jpg" },
        { name: "Tu Tu Hai Wahi", src: "/songs/bollywood/Tu Tu Hai Wahi.mp3", imageSrc: "/images/songs/bollywood/tutuhaiwahi.jpg" },
        { name: "Tumse Milke Dil Ka", src: "/songs/bollywood/Tumse Milke Dil Ka.mp3", imageSrc: "/images/songs/bollywood/tumse milke dil ka.jpg" },
      ],

    hollywood: [
      { name: "Daddy Yankee - Gasolina", src: "/songs/hollywood/Daddy Yankee - Gasolina.mp3", imageSrc: "/images/songs/hollywood/gasolina.jpg" },
      { name: "Ed Sheeran - Perfect", src: "/songs/hollywood/Ed Sheeran - Perfect.mp3", imageSrc: "/images/songs/hollywood/perfect.jpg" },
      { name: "Eminem", src: "/songs/hollywood/Eminem - Mockingbird (Lyrics).mp3", imageSrc: "/images/songs/hollywood/mokingbird.jpg" },
      { name: "Imagine Dragons - Believer", src: "/songs/hollywood/Imagine Dragons - Believer.mp3", imageSrc: "/images/songs/hollywood/beleiver.jpg" },
      { name: "Jay Sean - Ride It", src: "/songs/hollywood/Jay Sean - Ride It.mp3", imageSrc: "/images/songs/hollywood/ride it.jpg" },
      { name: "Maroon 5 - Memories", src: "/songs/hollywood/Maroon 5 - Memories.mp3", imageSrc: "/images/songs/hollywood/memories.jpg" },
      { name: "Pink Sweat$ - At My Worst", src: "/songs/hollywood/Pink Sweat$ - At My Worst.mp3", imageSrc: "/images/songs/hollywood/at my worst.jpg" },
      { name: "Señorita", src: "/songs/hollywood/Shawn Mendes, Camila Cabello - Señorita.mp3", imageSrc: "/images/songs/hollywood/senorita.jpg" },
      { name: "Sia - Unstoppable", src: "/songs/hollywood/Sia - Unstoppable.mp3", imageSrc: "/images/songs/hollywood/unstoppable.jpg" },
      { name: "Taylor Swift", src: "/songs/hollywood/Taylor Swift - Lover.mp3", imageSrc: "/images/songs/hollywood/lover.jpg" },
    ],

    tollywood: [
      { name: "Bangaraju", src: "/songs/tollywood/Bangaraju.mp3", imageSrc: "/images/songs/tollywood/Bangarraju.jpg" },
      { name: "Buttabommba", src: "/songs/tollywood/Buttabommba.mp3", imageSrc: "/images/songs/tollywood/buttabomma.jpg" },
      { name: "Inkem Inkem", src: "/songs/tollywood/Inkem Inkem.mp3", imageSrc: "/images/songs/tollywood/inkem.jpg" },
      { name: "Kannuna kalyanam", src: "/songs/tollywood/Kannuna kalyanam.mp3", imageSrc: "/images/songs/tollywood/kannuna.jpg" },
      { name: "Naatu Naatu", src: "/songs/tollywood/Naatu Naatu.mp3", imageSrc: "/images/songs/tollywood/Naatu_Naatu.jpg" },
      { name: "Neeli Neeli Akasam", src: "/songs/tollywood/Neeli Neeli Akasam.mp3", imageSrc: "/images/songs/tollywood/neelinelli.jpg" },
      { name: "Srivalli", src: "/songs/tollywood/Srivalli.mp3", imageSrc: "/images/songs/tollywood/shrivali.jpg" },
      { name: "Telussa Telussa", src: "/songs/tollywood/Telussa Telussa.mp3", imageSrc: "/images/songs/tollywood/telussa.jpg" },
      { name: "Yenti Yenti", src: "/songs/tollywood/Yenti Yenti.mp3", imageSrc: "/images/songs/tollywood/yenti.jpg" },
      { name: "Yevrani Adganu", src: "/songs/tollywood/Yevrani Adganu.mp3", imageSrc: "/images/songs/tollywood/yevrani agdganu.jpg" },
    ],
};


  function changeCategory(category) {
    const songList = document.getElementById("songList");
    songList.innerHTML = "";
  
    songs[category].forEach((song, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.className = "song-button";
      
      const serialNumber = document.createElement("span");
      serialNumber.textContent = (index + 1) + ".";
      serialNumber.className = "serial-number";
      button.appendChild(serialNumber);
      
      const songImage = document.createElement("img");
      songImage.src = song.imageSrc;
      songImage.alt = song.name;
      songImage.className = "song-image";
      button.appendChild(songImage);
      
      const songName = document.createElement("span");
      songName.textContent = song.name;
      songName.className = "song-name";
      button.appendChild(songName);
      
      const playIcon = document.createElement("i");
      playIcon.className = "fas fa-play";
      button.appendChild(playIcon);
      
      button.addEventListener("click", () => playSong(song.src, song.name, song.imageSrc));

      li.appendChild(button);
      songList.appendChild(li);
    });
  }
  
  window.onload = function() {
    changeCategory("bollywood"); // Set "Bollywood" as the default category
  }

  function playSong(src, songName, songImageSrc) {
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSongNameElement = document.getElementById("currentSongName");
    const musicPlayerImg = document.querySelector(".music-player-img");
    
    audioPlayer.src = src;
    audioPlayer.play();
    currentSongNameElement.textContent = "Now Playing: " + songName;
    musicPlayerImg.src = songImageSrc;
    musicPlayerImg.alt = songName;
}



  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
  menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
  cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  };
  searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
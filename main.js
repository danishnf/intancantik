const playButton = document.getElementById('playButton');
const song = document.getElementById('mySong');

playButton.onclick = () => {
    // Hilangkan screen tombol
    document.getElementById('greeting-screen').style.display = 'none';
    
    // Munculkan teks ucapan
    document.getElementById('love-text').style.display = 'block';

    // JALANKAN ANIMASI BUNGA (Menghapus class "container")
    document.body.classList.remove("container");

    // Putar lagu
    song.play();
};

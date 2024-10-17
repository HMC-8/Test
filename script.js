const audio = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music-button');
let isPlaying = false;

toggleButton.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        toggleButton.textContent = 'Bật nhạc Chill . . .';
    } else {
        audio.play();
        toggleButton.textContent = 'Tắt nhạc . . .';
    }
    isPlaying = !isPlaying;
});

// Thêm sự kiện click cho nút thông tin
const infoButton = document.getElementById('info-button');
const informationSection = document.getElementById('information-section');
const closeInfoButton = document.getElementById('close-info-button');

infoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    informationSection.style.display = 'block'; // Hiện phần thông tin
    informationSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn đến phần thông tin
});

closeInfoButton.addEventListener('click', function() {
    informationSection.style.display = 'none'; // Ẩn phần thông tin
});

infoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    informationSection.classList.toggle('show'); // Thêm lớp .show để hiển thị phần thông tin
    if (informationSection.classList.contains('show')) {
        informationSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn đến phần thông tin
    }
});

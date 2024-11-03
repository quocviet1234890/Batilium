function toggleDropdown() {
    const options = document.getElementById('language-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block'; // Hiện/ẩn danh sách
}

function changeLanguage(language) {
    const display = document.querySelector('.language-display');
    display.innerHTML = language + ' <span class="arrow">&#9662;</span>'; // Cập nhật ngôn ngữ hiển thị
    toggleDropdown(); // Ẩn danh sách sau khi chọn ngôn ngữ
}

// Đóng danh sách nếu người dùng nhấp ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.language-display')) {
        const options = document.getElementById('language-options');
        if (options.style.display === 'block') {
            options.style.display = 'none';
        }
    }
}


function toggleLanguageList() {
    const languageList = document.getElementById("language-list");
    languageList.classList.toggle("hidden");
}

function selectLanguage(language) {
    const languageButton = document.getElementById("language-button");
    languageButton.textContent = language; // Cập nhật văn bản nút
    toggleLanguageList(); // Đóng danh sách sau khi chọn ngôn ngữ
}

// Thay đổi hành vi khi nhấn vào nút ngôn ngữ hiển thị
document.getElementById("language-button").onclick = function() {
    const currentLanguage = this.textContent;
    if (currentLanguage === 'Tiếng Việt') {
        toggleLanguageList(); // Hiển thị danh sách nếu đang là Tiếng Việt
    } else {
        this.textContent = 'Tiếng Việt'; // Trở về Tiếng Việt nếu chọn ngôn ngữ khác
    }
};
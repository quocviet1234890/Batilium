document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button[data-answer]"); // Lấy tất cả các nút đáp án
    const submitButton = document.getElementById("submit-btn");
    const selectedAnswers = {}; // Lưu trữ các câu trả lời đã chọn

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const questionIndex = this.closest('.question').querySelector('p').textContent.split(' ')[0] - 1;
            const selectedAnswer = this.getAttribute("data-answer");

            // Lấy tất cả các nút trong câu hỏi hiện tại để xóa màu đỏ của câu trả lời trước đó
            const allButtonsInQuestion = this.closest('.question').querySelectorAll("button");

            // Xóa màu đỏ của tất cả các nút trong câu hỏi
            allButtonsInQuestion.forEach(btn => {
                btn.classList.remove("selected");
            });

            // Chỉ áp dụng màu đỏ cho đáp án đã chọn
            this.classList.add("selected");

            // Lưu đáp án đã chọn vào đối tượng selectedAnswers
            selectedAnswers[questionIndex] = selectedAnswer;
        });
    });

    // Khi nhấn nút Nộp bài, lưu các câu trả lời và chuyển trang kết quả
    submitButton.addEventListener("click", function() {
        const correctAnswers = ["B", "B", "A", "A", "C", "D", "C", "B", "C", "B"]; // Đáp án đúng cho từng câu hỏi
        let score = 0;

        // Lưu trữ các câu trả lời đã chọn và đáp án đúng vào localStorage
        localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
        localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));

        // Chuyển hướng đến trang kết quả
        window.location.href = "result.html";
    });
});

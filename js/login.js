document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.querySelector(".login-btn");

    // Kiểm tra nếu người dùng đã đăng nhập
    const username = localStorage.getItem("username");
    if (username) {
        loginButton.textContent = username; // Hiển thị tên người dùng
        loginButton.addEventListener("click", function() {
            window.location.href = "profile.html"; // Chuyển sang trang profile
        });
    }

    // Xử lý đăng nhập
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Kiểm tra thông tin đăng nhập (có thể thay thế bằng gọi API hoặc kiểm tra dữ liệu)
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (email === localStorage.getItem("email") && password === storedPassword) {
            // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem("isLoggedIn", true);

            // Chuyển sang trang chủ (index.html)
            window.location.href = "index.html";
        } else {
            alert("Thông tin đăng nhập không đúng!");
        }
    });
});

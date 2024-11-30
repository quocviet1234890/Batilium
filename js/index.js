document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.getElementById("user-info");
    const userName = document.getElementById("user-name");
    const avatar = document.getElementById("avatar");

    // Kiểm tra nếu người dùng đã đăng nhập
    const username = localStorage.getItem("username");
    if (username) {
        // Hiển thị tên người dùng thay cho nút Đăng nhập
        userName.textContent = username;

        // Thêm sự kiện click vào avatar để chuyển đến trang Profile
        avatar.addEventListener("click", function () {
            window.location.href = "profile.html"; // Chuyển đến trang profile
        });

        // Nếu người dùng nhấn vào tên người dùng, cũng chuyển đến trang Profile
        userName.addEventListener("click", function () {
            window.location.href = "profile.html"; // Chuyển đến trang profile
        });
    } else {
        userName.textContent = "Đăng nhập"; // Nếu chưa đăng nhập thì hiển thị nút Đăng nhập
        userInfo.addEventListener("click", function () {
            window.location.href = "login.html"; // Chuyển đến trang đăng nhập
        });
    }
});

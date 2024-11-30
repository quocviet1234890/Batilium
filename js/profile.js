document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const address = localStorage.getItem("address");
    const dob = localStorage.getItem("dob");

    if (username) {
        document.getElementById("username-display").textContent = username;
        document.getElementById("email-display").textContent = email;
        document.getElementById("phone-display").textContent = phone;
        document.getElementById("address-display").textContent = address;
        document.getElementById("dob-display").textContent = dob;
    } else {
        window.location.href = "login.html"; // Nếu chưa đăng nhập thì chuyển đến trang đăng nhập
    }

    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("address");
        localStorage.removeItem("dob");
        localStorage.removeItem("password");
        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html"; // Quay lại trang đăng nhập
    });
});

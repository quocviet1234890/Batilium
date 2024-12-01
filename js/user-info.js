document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
  
      // Hiển thị thông tin người dùng
      document.getElementById("user-avatar").src = user.avatar || "data:image/jpeg;base64,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";
      document.getElementById("user-name").textContent = user.name;
      document.getElementById("user-email").textContent = user.email || "Chưa có email";
      document.getElementById("user-phone").textContent = user.phone || "Chưa có số điện thoại";
      document.getElementById("user-dob").textContent = user.dob || "Chưa có năm sinh";
  
      // Đăng xuất
      document.getElementById("logout-btn").addEventListener("click", () => {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
      });
    } else {
      // Nếu chưa đăng nhập, chuyển về trang đăng nhập
      window.location.href = "login.html";
    }
  });
  
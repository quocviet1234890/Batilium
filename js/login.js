document.addEventListener('DOMContentLoaded', function() {
  // Lấy các phần tử DOM cần thiết
  const loginForm = document.getElementById('login-form');
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const errorMessage = document.getElementById('error-message');

  // Kiểm tra nếu các phần tử tồn tại
  if (!loginForm || !loginEmail || !loginPassword || !errorMessage) {
    console.error("Một trong các phần tử DOM không tồn tại!");
    return; // Dừng chương trình nếu phần tử không tồn tại
  }

  // Lắng nghe sự kiện submit của form đăng nhập
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngừng việc gửi form mặc định

    // Lấy giá trị email và mật khẩu
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    // Kiểm tra nếu các trường bị bỏ trống
    if (!email || !password) {
      showError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm người dùng trong danh sách
    const user = users.find(u => u.email === email && u.password === password);

    // Nếu người dùng hợp lệ, đăng nhập và chuyển hướng
    if (user) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user)); // Lưu thông tin người dùng
      window.location.href = 'index.html'; // Chuyển hướng tới trang chủ
    } else {
      showError('Email hoặc mật khẩu không đúng.');
    }
  });

  // Hàm hiển thị thông báo lỗi
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
});

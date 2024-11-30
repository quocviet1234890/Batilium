// Lấy các phần tử từ DOM
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Dữ liệu mẫu cho việc đăng nhập
const users = JSON.parse(localStorage.getItem('users')) || [];

// Lắng nghe sự kiện submit của form đăng nhập
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Kiểm tra nếu trường nào còn trống
  if (!email || !password) {
    showError("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  // Kiểm tra thông tin đăng nhập
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Lưu thông tin người dùng đã đăng nhập vào sessionStorage
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    
    // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
    window.location.href = 'index.html'; // Đảm bảo đây là trang chủ của bạn
  } else {
    showError("Email hoặc mật khẩu không đúng.");
  }
});

// Hàm hiển thị thông báo lỗi
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Kiểm tra nếu đã đăng nhập, thì chuyển hướng người dùng đến trang chủ
if (sessionStorage.getItem('loggedInUser')) {
  window.location.href = 'index.html';
}

const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const errorMessage = document.getElementById('error-message');

// Kiểm tra nếu người dùng đã đăng nhập tự động (nếu có thông tin trong localStorage)
document.addEventListener('DOMContentLoaded', function() {
  const storedUser = localStorage.getItem('user');
  
  if (storedUser) {
    // Nếu có thông tin người dùng, chuyển đến trang chủ
    window.location.href = 'index.html'; // Đảm bảo đường dẫn đúng
  }
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = loginEmail.value;
  const password = loginPassword.value;

  // Kiểm tra thông tin đăng nhập từ localStorage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (email === user.email && password === user.password) {
      alert('Đăng nhập thành công!');
      
      // Lưu thông tin người dùng vào localStorage (nếu chưa có)
      localStorage.setItem('user', JSON.stringify(user));

      // Chuyển đến trang chủ
      window.location.href = 'index.html';  // Đảm bảo đường dẫn đúng
    } else {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Sai email hoặc mật khẩu. Vui lòng thử lại!';
    }
  } else {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Không có tài khoản nào. Vui lòng đăng ký!';
  }
});

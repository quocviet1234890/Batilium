document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng gửi form để kiểm tra dữ liệu
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Kiểm tra thông tin đăng nhập (ví dụ: tài khoản và mật khẩu cố định)
    if (username === 'user@gmail.com' && password === 'password123') {
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('loggedIn', true);
      
      alert('Đăng nhập thành công!');
      window.location.href = './index.html';  // Chuyển hướng đến trang chủ
    } else {
      document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không đúng.';
    }
  });
  
  // Kiểm tra trạng thái đăng nhập (nếu có)
  if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = './index.html';  // Nếu đã đăng nhập, chuyển đến trang chủ
  }
  
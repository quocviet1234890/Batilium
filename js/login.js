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
      
      // Điều hướng đến index.html (trang chủ)
      window.location.href = 'index.html';  // Chuyển hướng đến index.html
    } else {
      // Hiển thị thông báo lỗi nếu đăng nhập không thành công
      document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không đúng.';
    }
  });
  
  // Kiểm tra trạng thái đăng nhập khi tải lại trang (để không vào lại trang đăng nhập nếu đã đăng nhập)
  if (localStorage.getItem('loggedIn') === 'true') {
    // Nếu người dùng đã đăng nhập, chuyển đến trang index.html (trang chủ)
    window.location.href = 'index.html';  // Chuyển hướng đến trang chủ (index.html)
  }
  
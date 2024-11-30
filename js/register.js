// Lấy các phần tử DOM cần thiết
const registerForm = document.getElementById('register-form');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');
const registerPhone = document.getElementById('register-phone');
const registerAddress = document.getElementById('register-address');
const registerBirthdate = document.getElementById('register-birthdate');
const registerBtn = document.getElementById('register-btn');

// Xử lý đăng ký
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const email = registerEmail.value;
  const password = registerPassword.value;
  const confirmPassword = registerConfirmPassword.value;
  const phone = registerPhone.value;
  const address = registerAddress.value;
  const birthdate = registerBirthdate.value;

  // Kiểm tra nếu mật khẩu khớp
  if (password !== confirmPassword) {
    alert('Mật khẩu không khớp. Vui lòng thử lại.');
    return;
  }

  // Kiểm tra định dạng số điện thoại
  const phoneRegex = /^[0-9]{10,11}$/;
  if (!phoneRegex.test(phone)) {
    alert('Số điện thoại không hợp lệ.');
    return;
  }

  // Tạo đối tượng người dùng sau khi đăng ký
  const newUser = {
    email,
    password,
    phone,
    address,
    birthdate,
    avatar: 'default-avatar.jpg'  // Gán avatar mặc định
  };

  // Lưu thông tin người dùng vào localStorage
  localStorage.setItem('user', JSON.stringify(newUser));

  // Thông báo đăng ký thành công
  alert('Đăng ký thành công! Bạn sẽ được chuyển tới trang đăng nhập.');

  // Chuyển đến trang đăng nhập
  window.location.href = 'index.html';  // Chuyển hướng tới trang đăng nhập
});

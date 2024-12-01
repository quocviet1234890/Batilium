// Lấy các phần tử DOM cần thiết
const registerForm = document.getElementById('register-form');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');
const registerPhone = document.getElementById('register-phone');
const registerAddress = document.getElementById('register-address');
const registerBirthdate = document.getElementById('register-birthdate');

// Xử lý đăng ký
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();
  const confirmPassword = registerConfirmPassword.value.trim();
  const phone = registerPhone.value.trim();
  const address = registerAddress.value.trim();
  const birthdate = registerBirthdate.value.trim();

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

  // Lấy danh sách người dùng từ localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Kiểm tra nếu email đã tồn tại
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('Email đã tồn tại. Vui lòng chọn email khác.');
    return;
  }

  // Tạo đối tượng người dùng mới
  const newUser = {
    email,
    password,
    phone,
    address,
    birthdate,
    avatar: 'avatar.jpg'  // Gán avatar mặc định
  };

  // Thêm người dùng vào mảng
  users.push(newUser);

  // Lưu lại vào localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Thông báo đăng ký thành công
  alert('Đăng ký thành công! Bạn sẽ được chuyển tới trang đăng nhập.');

  // Chuyển hướng tới trang đăng nhập
  window.location.href = 'login.html';  // Chuyển hướng tới trang đăng nhập
});

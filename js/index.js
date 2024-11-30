// Kiểm tra xem người dùng đã đăng nhập chưa
window.onload = function() {
    const user = localStorage.getItem("user");
    if (user) {
      const userInfo = JSON.parse(user);
      console.log("Chào mừng lại, " + userInfo.email);
    } else {
      console.log("Chưa đăng nhập");
    }
  };
  
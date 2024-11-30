function toggleLanguageList() {
    const languageList = document.getElementById("language-list");
    languageList.classList.toggle("hidden");
}

function selectLanguage(language) {
    const languageButton = document.getElementById("language-button");
    languageButton.textContent = language; // Cập nhật văn bản nút
    toggleLanguageList(); // Đóng danh sách sau khi chọn ngôn ngữ
}

// Thay đổi hành vi khi nhấn vào nút ngôn ngữ hiển thị
document.getElementById("language-button").onclick = function() {
    const currentLanguage = this.textContent;
    if (currentLanguage === 'Tiếng Việt') {
        toggleLanguageList(); // Hiển thị danh sách nếu đang là Tiếng Việt
    } else {
        this.textContent = 'Tiếng Việt'; // Trở về Tiếng Việt nếu chọn ngôn ngữ khác
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const loggedInUser = sessionStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      // Người dùng đã đăng nhập, hiển thị thông tin
      const user = JSON.parse(loggedInUser);
  
      // Lấy các phần tử DOM để hiển thị avatar và tên người dùng
      const userInfoDiv = document.getElementById("user-info");
      const userAvatar = document.getElementById("user-avatar");
      const userName = document.getElementById("user-name");
      const logoutBtn = document.getElementById("logout-btn");
  
      // Hiển thị avatar và tên người dùng
      userAvatar.src = user.avatar || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBg0NBwgREBAJDQoNCwoKDRUIEQ8KFxEiFhURExMYKCgsGBolGxMTITEhJSk3Oi4uFx8zOD8sNygtLisBCgoKDQ0NDg0NDi0dHxkrKysrKystKysrKysrLS0rKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAM0A0QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgUBBAYDB//EADQQAQACAgECAgcHAwUBAAAAAAABAgMRBAUhMUESIjJRcXKRFUJTYZKisTShwRMzUoHhJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APoGLFjw4q0w1itcda1rSsejEVjyTBpkAAAAAAAAAAAAAAAAAAAAAAAAAFABAAAAAAAAAAAAAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAAAAABQAQAAAAAAA8QGxg4XJz+xTt/yt6sLHp3Ta1iL543M94pPhC0iIiO0JauKanRrzHr5Ij4R6SU9F7ds/wC3/wBW4auKHL0rkUj1NW/KJ7tK+O+O2r11MeUurePI42LkV1kj4W84NTHMDY5nFtxcup8J71t74a6oAAAAAAAAACgAgAAAAAA3+k8aM2f0rx2p3+Nmg6HpWOMfDr29vvKUjcARoAAABr87jxyMExMd4jdZ/NzUxMT38uzrXOdTxxj5ltR7XeFiVqgKgAAAAAAAKACAAAAAADqcFYrirEeUVhyzq6Tuka90JViQCKAAAAKXrldZaT762j6LpT9en18f5Rf/AAsSqoBUAAAAAAABQAQAAAAAAdNwrxk4tJ99e7mVv0Xkbiccz4d6pVi2ARQAAABRdayelytR9yP3LrLeuPHNreFYmZcxnyWy5bWn707WJUAFQAAAAAAAFABAAAAAABLFkthyRak96ztEB03E5FOTii1Z+aPdL3cvxuRk42T0sc/GPKarvi9RwZ49afRn3W9WEsWVuhExMdhFCfB55c2LDG8l4j4yqOd1OckTXB2jwm3nKjPVuZF5/wBPHPaJ9aY85VgKyAAAAAAAAACgAgAAAAAAPbFxORm/28c/HybVOkcifamI/cauK8Wn2Nf8aPpJ9i3/ABo/SbDFfTkZqexkmPhKc8zlTHfNb6t37Fv+NH6T7Fv+NH6U2HVZa1rT60/VhafYt/xo/SfYt/xo/SuwVYs56NliO2SPp6Lwy9N5WOO1d/L6xpjTEr0vSdXrrXlKIgAAAAAAAKACAAANrgcO3Kyd/Zr7Ug8+LxMvJtqkdvO0+ELrjdNwYe8x6Ux528G1ix0xU9HHGohNLVw1qOwCKAAAAAAAA882HHmrrJTfxVPM6Vakelx53Ed5pPiuhdHJTExPePDxiRe9Q4Fc9ZtjjVo+kqK0TWdTHeO0xKy6yAAAAACgAgAD04+G2fLFax4z3/KrpcGKuHHFaR7MfVXdGwxXHOSY729WPlWe0qxLZtHZtFZ2bY2bBI2js2CWzaOzYJbNo7Ngls2js2DO2do7NgltU9Y4ka/1aR88R/K02jetb0mLR2tFon4LODlh6cnFOHPas/dn9rzVkAAAFABAiNz2Hpxo3npE+dqx/cHQ8ekY8Nax92unojvszuUVkY2xsEhHZsEhHZsEhjZsGRHZsEhHbOwZEdmwSGNsbBU9ax6zVtH362if+lcuOsxE4Kz7p1/ZTrEAAABQAQevE/qsfz0/l5PTi/1NPmr/ACDotm0RFS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAafV5/8Alj56/wASp1v1b+nj5q/5VCxAAAAXH//Z"; // Sử dụng URL avatar người dùng hoặc ảnh mặc định
      userName.textContent = user.name;
  
      // Hiển thị phần thông tin người dùng và nút đăng xuất
      userInfoDiv.style.display = "flex";
      logoutBtn.style.display = "inline-block";
  
      // Thêm sự kiện click vào avatar để chuyển đến trang thông tin người dùng
      userAvatar.addEventListener("click", () => {
        window.location.href = "user-info.html"; // Chuyển đến trang thông tin người dùng
      });
  
      // Xử lý sự kiện đăng xuất
      logoutBtn.addEventListener("click", () => {
        // Xóa thông tin người dùng khỏi sessionStorage và chuyển hướng về trang login
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
      });
    } else {
      // Nếu chưa đăng nhập, ẩn phần thông tin người dùng và nút đăng xuất
      const userInfoDiv = document.getElementById("user-info");
      userInfoDiv.style.display = "none";
    }
  });
  
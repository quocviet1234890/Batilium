document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin người dùng từ localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    const storedAvatar = localStorage.getItem("userAvatar");

    const userNameElement = document.getElementById("user-name");
    const userAvatarElement = document.getElementById("user-avatar");
    const authBtn = document.getElementById("auth-btn");

    if (storedEmail) {
        // Nếu người dùng đã đăng nhập, hiển thị tên và avatar
        userNameElement.textContent = storedName ? `Chào, ${storedName}` : "Chào, người dùng!";
        userAvatarElement.src = storedAvatar ? storedAvatar : "default-avatar.png";  // Avatar mặc định nếu không có
        authBtn.textContent = "Đăng Xuất"; // Đổi nút thành "Đăng Xuất"
    } else {
        // Nếu chưa đăng nhập, nút sẽ là "Đăng Nhập"
        userNameElement.textContent = "Vui lòng đăng nhập";
        userAvatarElement.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBg0NBwgREBAJDQoNCwoKDRUIEQ8KFxEiFhURExMYKCgsGBolGxMTITEhJSk3Oi4uFx8zOD8sNygtLisBCgoKDQ0NDg0NDi0dHxkrKysrKystKysrKysrLS0rKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAM0A0QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgUBBAYDB//EADQQAQACAgECAgcHAwUBAAAAAAABAgMRBAUhMUESIjJRcXKRFUJTYZKisTShwRMzUoHhJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APoGLFjw4q0w1itcda1rSsejEVjyTBpkAAAAAAAAAAAAAAAAAAAAAAAAAFABAAAAAAAAAAAAAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAAAAABQAQAAAAAAA8QGxg4XJz+xTt/yt6sLHp3Ta1iL543M94pPhC0iIiO0JauKanRrzHr5Ij4R6SU9F7ds/wC3/wBW4auKHL0rkUj1NW/KJ7tK+O+O2r11MeUurePI42LkV1kj4W84NTHMDY5nFtxcup8J71t74a6oAAAAAAAAACgAgAAAAAA3+k8aM2f0rx2p3+Nmg6HpWOMfDr29vvKUjcARoAAABr87jxyMExMd4jdZ/NzUxMT38uzrXOdTxxj5ltR7XeFiVqgKgAAAAAAAKACAAAAAADqcFYrirEeUVhyzq6Tuka90JViQCKAAAAKXrldZaT762j6LpT9en18f5Rf/AAsSqoBUAAAAAAABQAQAAAAAAdNwrxk4tJ99e7mVv0Xkbiccz4d6pVi2ARQAAABRdayelytR9yP3LrLeuPHNreFYmZcxnyWy5bWn707WJUAFQAAAAAAAFABAAAAAABLFkthyRak96ztEB03E5FOTii1Z+aPdL3cvxuRk42T0sc/GPKarvi9RwZ49afRn3W9WEsWVuhExMdhFCfB55c2LDG8l4j4yqOd1OckTXB2jwm3nKjPVuZF5/wBPHPaJ9aY85VgKyAAAAAAAAACgAgAAAAAAPbFxORm/28c/HybVOkcifamI/cauK8Wn2Nf8aPpJ9i3/ABo/SbDFfTkZqexkmPhKc8zlTHfNb6t37Fv+NH6T7Fv+NH6U2HVZa1rT60/VhafYt/xo/SfYt/xo/SuwVYs56NliO2SPp6Lwy9N5WOO1d/L6xpjTEr0vSdXrrXlKIgAAAAAAAKACAAANrgcO3Kyd/Zr7Ug8+LxMvJtqkdvO0+ELrjdNwYe8x6Ux528G1ix0xU9HHGohNLVw1qOwCKAAAAAAAA882HHmrrJTfxVPM6Vakelx53Ed5pPiuhdHJTExPePDxiRe9Q4Fc9ZtjjVo+kqK0TWdTHeO0xKy6yAAAAACgAgAD04+G2fLFax4z3/KrpcGKuHHFaR7MfVXdGwxXHOSY729WPlWe0qxLZtHZtFZ2bY2bBI2js2CWzaOzYJbNo7Ngls2js2DO2do7NgltU9Y4ka/1aR88R/K02jetb0mLR2tFon4LODlh6cnFOHPas/dn9rzVkAAAFABAiNz2Hpxo3npE+dqx/cHQ8ekY8Nax92unojvszuUVkY2xsEhHZsEhHZsEhjZsGRHZsEhHbOwZEdmwSGNsbBU9ax6zVtH362if+lcuOsxE4Kz7p1/ZTrEAAABQAQevE/qsfz0/l5PTi/1NPmr/ACDotm0RFS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAS2bRAafV5/8Alj56/wASp1v1b+nj5q/5VCxAAAAXH//Z"
        authBtn.textContent = "Đăng Nhập";
    }

    // Xử lý hành động đăng nhập / đăng xuất
    authBtn.addEventListener("click", function() {
        if (storedEmail) {
            // Nếu người dùng đã đăng nhập, đăng xuất
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userName");
            localStorage.removeItem("userAvatar");
            window.location.reload(); // Tải lại trang để cập nhật trạng thái
        } else {
            // Nếu chưa đăng nhập, chuyển đến trang đăng nhập
            window.location.href = "./login.html";
        }
    });
});

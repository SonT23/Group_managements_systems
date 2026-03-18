# iCREAL ERP - Hệ thống Quản trị Nguồn lực Câu lạc bộ
*Version: 2.0 (Refactored & Standardized)*

## 1. Thông tin Nghiệp vụ (Business Logic)

### 1.1. Hệ thống Phân quyền (Role-Based Access Control)
Hệ thống sử dụng cơ chế phân quyền hai lớp để đảm bảo tính linh hoạt:
* **Global Role (Quyền Toàn hệ thống):** Chức danh chính thức của thành viên trong CLB. Bao gồm: `Chủ nhiệm`, `Phó Chủ nhiệm`, `Trưởng Ban`, `Thành viên`, `Thủ quỹ`.
* **Local/Contextual Role (Quyền Ngữ cảnh):** Vai trò tạm thời được cấp phát riêng cho từng Sự kiện. Bao gồm: `Quản lý Sự kiện`, `Trưởng Tiểu ban`, `Thành viên Tiểu ban`.
* **Ban/Lĩnh vực (Department):** Mỗi thành viên sẽ trực thuộc một Ban cố định (VD: Ban Truyền thông, Ban Nhân sự). 

### 1.2. Vòng đời Sự kiện (Event Lifecycle)
Một sự kiện đi qua các trạng thái bắt buộc:
1.  **PENDING (Chờ duyệt):** Được tạo bởi Trưởng Ban/Chủ nhiệm/Phó Chủ nhiệm.
2.  **APPROVED (Đã duyệt):** Chủ nhiệm/Phó Chủ nhiệm xác nhận cho phép chạy sự kiện. (Có thể bị REJECTED - Từ chối).
3.  **ONGOING (Đang diễn ra):** Bắt đầu mở đăng ký (Quota - Giới hạn số lượng), phân bổ tiểu ban và check-in.
4.  **COMPLETED (Hoàn thành) / CANCELLED (Đã hủy):** Trạng thái kết thúc do người tạo hoặc Ban Chủ nhiệm thiết lập.
*Quyền duyệt đơn tham gia sự kiện của thành viên thuộc về: Quản lý Sự kiện đó, hoặc Trưởng Ban tạo ra sự kiện.*

### 1.3. Vòng đời Quản lý Quỹ (Fund Lifecycle)
**Quy tắc tối thượng: KHÔNG BAO GIỜ XÓA (HARD DELETE) DỮ LIỆU QUỸ.**
1.  **DRAFT (Nháp):** Bất kỳ thành viên nào cũng có quyền tạo đơn yêu cầu Chi (Thu chỉ do Thủ quỹ/Ban chủ nhiệm tạo).
2.  **PENDING (Chờ duyệt):** Chờ Thủ quỹ hoặc Ban Chủ nhiệm duyệt trên hệ thống.
3.  **APPROVED (Đã duyệt):** Xác nhận đơn hợp lệ.
4.  **SIGNED (Đã ký chứng từ):** Xác nhận đã có chữ ký trên giấy tờ vật lý.
5.  **COMPLETED (Đã thu/chi tiền):** Hoàn tất giao dịch thực tế.
6.  **VOIDED (Đã hủy):** Nếu có sai sót, phiếu quỹ sẽ bị chuyển sang trạng thái Hủy, ghi rõ lý do, tuyệt đối không được xóa khỏi Database.

---

## 2. Kiến trúc Routing (Standard RESTful API & Views)

Hệ thống phân tách rõ ràng các nhóm endpoint dựa trên resource.

### 2.1. Nhóm Public (Không yêu cầu đăng nhập)
* `GET /login` : Trang đăng nhập
* `POST /auth/login` : Xử lý xác thực

### 2.2. Nhóm Private (Yêu cầu qua Middleware Authentication)
**Dashboard & Cá nhân:**
* `GET /dashboard` : Hiển thị theo Global Role
* `GET /profile` : Hồ sơ cá nhân của user đang đăng nhập

**Quản lý Thành viên (Members/Users):**
* `GET /users` : Danh sách thành viên (Phân quyền: Level cao)
* `GET /users/:id` : Chi tiết thành viên
* `POST /users` : Thêm mới thành viên (Phân quyền: Chủ nhiệm)
* `PATCH /users/:id/status` : Vô hiệu hóa/Kích hoạt tài khoản (Soft Delete)

**Quản lý Sự kiện (Events):**
* `GET /events` : Danh sách sự kiện
* `POST /events` : Tạo sự kiện mới (Level cao)
* `GET /events/:slug` : Trang chi tiết sự kiện
* `PATCH /events/:id/status` : Duyệt/Hủy sự kiện (Chủ nhiệm/Phó CN)
* `POST /events/:id/sub-committees` : Tạo tiểu ban trong sự kiện
* `POST /events/:id/register` : Thành viên gửi đơn đăng ký tham gia
* `PATCH /events/:id/members/:userId/approve` : Duyệt đơn tham gia (Quản lý sự kiện)
* `POST /events/:id/check-in` : Thực hiện check-in thành viên

**Quản lý Quỹ (Funds):**
* `GET /funds` : Danh sách phiếu quỹ
* `POST /funds` : Tạo phiếu thu/chi mới
* `GET /funds/:id` : Chi tiết phiếu
* `PATCH /funds/:id/status` : Cập nhật trạng thái duyệt/ký/hoàn thành (Thủ quỹ/Ban Chủ nhiệm)
* `PATCH /funds/:id/void` : Hủy phiếu quỹ (Kèm lý do)

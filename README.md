# Group_managements_systems
*Version 1.0 Infomation <br>
<b><h4>@Thông tin về nghiệp vụ:</b></h4>
-Role 1.0: <br>
  Thành viên (Trực thuộc ban), Ban (không có với Chủ nhiệm, Phó chủ nhiệm và Thủ quỹ), Chủ nhiệm, Phó chủ nhiệm, Thủ Quỹ, Trường Ban (Trực thuộc ban), Lĩnh vực (Trực thuộc ban). <br>
-Quyền Create Events: <br>
  Trưởng Ban, Chủ Nhiệm, Phó Chủ Nhiệm, <br>
-Quyền Thêm Members: <br>
  Chủ Nhiệm.<br>
-Tiểu ban (Thuộc Events): Mỗi thành viên chỉ được tham gia 1 tiểu ban trong mỗi events. <br>
-Quote: mỗi events sẽ có giới hạn về thành viên tham sự, mỗi tiểu ban cũng có giới hạn do người tạo event đăt. <br>
-Quỹ: Cần được chủ nhiệm hoặc thủ quỹ chốt thì mới có thể đưa vào hiển thị (Bao gồm đã ký giấy, xác nhận đã thực hiện quỹ). <br>
-Những dữ liệu không được phép xóa: Thành viên, Events, Quỹ (bắt buộc phải truy cập db nếu cần xóa). <br>
-Những dữ liệu được phép hủy: Thành viên (Unactive), Events. <br>
<b><h4>@Web design:</h4></b>
a) Nhóm public <br>
Trang đăng nhập <br>
b) Nhóm private <br>
Dashboard ( Dành cho từng role sẽ hiện thị khác ). <br>
Hồ sơ cá nhân. <br>
Danh sách thành viên ( dành cho level cao ). <br>
Thêm sửa thành viên (dành cho level cao). <br>
Danh sách sự kiện (tất cả). <br>
Tạo sửa sự kiện (dành cho level cao). <br>
Chi tiết sự kiện (tất cả). <br>
Đăng ký sự kiện (tất cả). <br>
Duyệt đơn sự kiện (dành cho level cao). <br>
Check-in (do người tạo phân công). <br>
Danh sách phiếu quỹ (level cao). <br>
Tạo phiếu thu chi (tất cả). <br>
Chi tiết phiếu (tất cả). <br>
Quản lý doanh mục: role, department, fundcategory, products. <br>
c) Sơ đồ Routes
1. Dành cho Members. <br>
Login -> Dashboard -> Events <br>
                   -> Events\Eventdetail\::slug\regisEvent <br>
                   -> Events\Eventdetail\::slug\check_in <br>
                   -> Members <br>
                   -> Members\Memberdetail\::slug\edit <br>
                   -> Funds
                   -> Funds\create <br>
                   -> Funds\Fundetail <br>
2. Dành cho Chủ nhiệm. <br>
Login -> Dashboard -> Events <br>
                   -> Events\Create <br>
                   -> Events\Cancel <br>
                   -> Events\Eventdetail\::slug <br>
                   -> Events\Eventdetail\::slug\edit <br>
                   -> Events\Eventdetail\::slug\regisEvent <br>
                   -> Events\Eventdetail\::slug\check_in <br>
                   -> Events\Eventdetail\::slug\make_check_in <br>
                   -> Events\Eventdetail\::slug\approve
                   -> Members <br>
                   -> Members\Memberdetail\::slug <br>
                   -> Members\Memberdetail\::slug\edit <br>
                   -> Funds\create <br>
                   -> Funds\Fundetail <br>
                   -> Funds\Fundetail\edit <br>
                   -> Funds\Fundetail\delete <br>
3. Dành cho Trường Ban. <br>
Login -> Dashboard -> Events <br>
                   -> Events\Create <br>
                   -> Events\Cancel <br>
                   -> Events\Eventdetail\::slug <br>
                   -> Events\Eventdetail\::slug\edit <br>
                   -> Events\Eventdetail\::slug\regisEvent <br>
                   -> Events\Eventdetail\::slug\check_in <br>
                   -> Events\Eventdetail\::slug\make_check_in <br>
                   -> Events\Eventdetail\::slug\approve
                   -> Members <br>
                   -> Members\Memberdetail\::slug <br>
                   -> Members\Memberdetail\::slug\edit <br>
                   -> Funds\create <br>
                   -> Funds\Fundetail <br>
4. Dành cho Quỹ <br>
Login -> Dashboard -> Events <br>
                   -> Events\Create <br>
                   -> Events\Cancel <br>
                   -> Events\Eventdetail\::slug <br>
                   -> Events\Eventdetail\::slug\edit <br>
                   -> Events\Eventdetail\::slug\regisEvent <br>
                   -> Events\Eventdetail\::slug\check_in <br>
                   -> Events\Eventdetail\::slug\make_check_in <br>
                   -> Events\Eventdetail\::slug\approve
                   -> Members <br>
                   -> Members\Memberdetail\::slug <br>
                   -> Members\Memberdetail\::slug\edit <br>
                   -> Funds\create <br>
                   -> Funds\Fundetail <br>
   

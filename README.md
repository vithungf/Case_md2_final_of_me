case module 2 quản lí siêu thị

gồm các chức năng

1 login,register,exit

2 đối với admin gồm có: quản lí người dùng(thêm sửa xóa showlist,khóa và mở khóa user){add min add thêm vào list proddcut sẽ thêm số lượng vào }
                        quản lí sản phẩm(CRUD sản phẩm, doanh thu)
3 đối với user gồm: show list sản phẩm 
                    thêm vào giỏ hàng 
                    show giỏ hàng
                    edit giỏ hàng
                    tìm kiếm gần đúng
                    lịch sử mua hàng
                    thanh toán
                    
cách hoạt động:login check role 1 là uesr,0 là admin
các chức năng như trên
và khi user thanh toán thì sẽ hiện doanh thu phía admin
admin thêm sản phẩm người dùng cugx có thể xem

demo:login user trc sau đến admin 

khi user mua hàng sẽ lưu lại lịch sử mua hàng và số lượng hàng có trong kho sẽ trừ đi (tổng số hàng - số hàng người dùng đã mua = số hàng còn lại)

còn nhiều chức năng ch hoàn thiện(tìm kiếm theo khoảng giá,xắp xếp theo  giá)

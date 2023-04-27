//Bai 5: Tinh tong 2 ky so
//bai1: tinh tien luong nhan vien
//Bước 1: tạo biến cho số 
//Bước 2: Tìm chữ số hàng chục, hàng đơn vị sau đó cộng 2 số vừa tìm được
//Bước 3: in kết quả tổng


var num = 23
var so_hang_dv = num % 10
var so_hang_chuc = Math.floor(num/10)
var tong = so_hang_dv + so_hang_chuc
console.log("tong",tong)
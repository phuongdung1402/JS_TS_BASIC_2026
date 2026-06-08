
//THIS :
// Định nghĩa : Bản chất của this , giống đại từ nhân xưng tôi trong đời sống. 
//Quy tắc : this ko mang giá trị cố định, giá trị của nó phụ thuộc hoàn toàn vào Ai là người gọi

//This : Trong object 
// A. Quy tắc vàng : kẻ đứng trước dấu chấm . = this


// const user = {
//     hoTen : 'neko',
//     tuoi: 18,
//     gioiThieu() { 
//         // có sử dụng this. this ở đây chính là object user
//         console.log(`Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
//     }
// }

// user.gioiThieu()

// const sanPham = {
//     ten: "iphone 15",
//     gia: 2500000,
//     soLuong: 10,

//     inThongTin() {
//         console.log(this);
//         console.log(this.ten);
//         console.log(this.gia);
//     },

//     giamGia(phanTram) {
//         this.gia = this.gia * ( 1- phanTram / 100);
//         console.log(`${this.ten} sau giam gia: ${this.gia.toLocaleString()}đ`);
//     }
// }

// sanPham.inThongTin()
// sanPham.giamGia(20)
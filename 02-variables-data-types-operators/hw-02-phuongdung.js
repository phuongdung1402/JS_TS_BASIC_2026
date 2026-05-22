//BTVN
//B1
const giaGoc = " 1.000.000 đ "
const giaGocFixed = parseInt(giaGoc.trim().replaceAll('.',''))
const result = giaGocFixed * (100 - 20) /100
console.log(result);

//B2
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

const tenFixed = tenSanPham.trim().toUpperCase()
const giaFixed = parseInt(giaGoc.slice(giaGoc.indexOf(' '), giaGoc.indexOf(' vnđ')).replaceAll(',',''))
const soLuongFixed = parseInt(soLuong.slice(soLuong.indexOf(' ')))
const maGiamGiaFixed = parseInt(maGiamGia.slice(maGiamGia.indexOf(':'), maGiamGia.indexOf(' OFF')).replaceAll(':',''))
const tongTien = giaFixed * soLuongFixed
const result = tongTien - (tongTien * 10) /100
const resultString = String(result)
const resultDisplay = resultString.substring(0,2)+'.'+resultString.substring(2,5)+'.'+resultString.substring(5)

console.log('HÓA ĐƠN THANH TOÁN - ID:#0002');
console.log(`Sản phẩm: ${tenFixed}`);
console.log(`Đơn giá: ${giaFixed}`);
console.log(`Số lượng: ${soLuongFixed}`);
console.log(`Tổng tiền (Gốc): ${tongTien}`);
console.log(`Giảm giá: ${maGiamGiaFixed}`);
console.log(`THÀNH TIỀN: ${resultDisplay} VNĐ `);









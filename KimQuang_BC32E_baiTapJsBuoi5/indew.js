// Bài 1:
document.getElementById('btn_b1').onclick = function () {
    // Input: all number
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('selectKhuVuc').value);
    var doiTuong = Number(document.getElementById('selectDoiTuong').value);

    var d1 = Number(document.getElementById('diem1').value);
    var d2 = Number(document.getElementById('diem2').value);
    var d3 = Number(document.getElementById('diem3').value);

    var tong = d1 + d2 + d3 + khuVuc + doiTuong;

    // Output: string
    var ketQua = '';

    // Process:
    if (d1 === 0 || d2 === 0 || d3 === 0) {
        ketQua = 'Thi kiểu gì 0 điểm z cha, học lại nha. ' + 'Tổng điểm: ' + tong;
    } else if (d1 > 10 || d2 > 10 || d3 > 10) {
        ketQua = 'Bớt xạo nha, 10 điểm là tối đa rồi ( ͠° ͟ʖ ͡°)';
    } else if (tong < diemChuan) {
        ketQua = 'Bạn đã được extra 1 năm học. ' + 'Tổng điểm: ' + tong;
    } else if (d1 > 0 && d2 > 0 && d3 > 0 && tong >= diemChuan) {
        ketQua = 'Bạn đã đậu. ' + 'Tổng điểm: ' + tong;
    };

    document.getElementById('kQ_b1').innerHTML = ketQua;
};

// Bài 2:
document.getElementById('btn_b2').onclick = function () {
    // Input: name: string; Kw, tong: number
    var name = document.getElementById('name').value;
    var Kw = Number(document.getElementById('Kw').value);
    var tong = 0;

    // Output: string
    var ketQua = '';

    // Process:
    if (Kw <= 50) {
        tong = Kw * 500;
    } else if (Kw > 50 && Kw <= 100) {
        tong = (50 * 500) + ((Kw - 50) * 650);
    } else if (Kw > 100 && Kw <= 200) {
        tong = (50 * 500) + (50 * 650) + ((Kw - 100) * 850);
    } else if (Kw > 200 && Kw <= 350) {
        tong = (50 * 500) + (50 * 650) + (100 * 850) + ((Kw - 200) * 1100);
    } else if (Kw > 350) {
        tong = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((Kw - 350) * 1300);
    };

    ketQua = 'Họ tên: ' + name + ';' + ' Tiền điện: ' + tong;
    document.getElementById('kQ_b2').innerHTML = ketQua;
};
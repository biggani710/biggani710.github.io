const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;

// Cập nhật slide
const updateSlide = () => {
    const width = listImage.offsetWidth;
    listImage.style.transform = `translateX(${-current * width}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.index-item-${current}`).classList.add('active');
};

// Tự động chuyển slide
const handleChangeSlide = () => {
    current = (current + 1) % length; // Tăng chỉ số hình ảnh
    updateSlide();
};

// Tự động chuyển slide sau 4 giây
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

// Bắt sự kiện nhấn nút phải
btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    current = (current + 1) % length; // Chuyển sang hình tiếp theo
    updateSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000); // Khởi động lại tự động
});

// Bắt sự kiện nhấn nút trái
btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    current = (current - 1 + length) % length; // Chuyển về hình trước
    updateSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000); // Khởi động lại tự động
});

// Hiển thị hình ảnh đầu tiên
updateSlide();

window.onscroll = function() {stickyMenu()};

// Lấy phần tử navbar
var navbar = document.getElementById("headerMain");
var sticky = headerMain.offsetTop;

// Thêm lớp "sticky" vào navbar khi đạt đến vị trí cuộn. 
// Loại bỏ lớp "sticky" khi rời khỏi vị trí cuộn
function stickyMenu() {
  if (window.scrollY >= sticky) {
    headerMain.classList.add("sticky");
  } else {
    headerMain.classList.remove("sticky");
  }
}

function swapItems(event, newText, newIconClass) {
    event.preventDefault();
    
    let fixedItem = document.getElementById('fixedItem');
    let dropdownContent = document.querySelector('.dropdown-content');
    let dropdownItems = Array.from(dropdownContent.querySelectorAll('a'));
    
    // Lấy thẻ <a> bên trong mục cố định hiện tại
    let fixedItemAnchor = fixedItem.querySelector('a');
    
    // Lấy thông tin của mục cố định hiện tại
    let oldText = fixedItem.querySelector('span').textContent;
    let oldIconClass = fixedItem.querySelector('i').className;
    
    // Cập nhật tiêu đề của mục cố định, bao gồm cả biểu tượng
    fixedItem.innerHTML = `<i class="${newIconClass}"></i><span>${newText}</span>`;
    fixedItem.classList.add('fixed-item');
    // Tạo mục mới cho dropdown với thông tin của mục cố định cũ
    let newDropdownItem = document.createElement('a');
    newDropdownItem.href = '#';
    newDropdownItem.dataset.text = oldText;
    newDropdownItem.dataset.icon = oldIconClass;
    newDropdownItem.innerHTML = `<i class="${oldIconClass}"></i>${oldText}`;
    newDropdownItem.onclick = (e) => swapItems(e, oldText, oldIconClass);

    // Thêm mục cũ vào dropdown nếu chưa có
    if (![...dropdownItems].some(item => item.dataset.text === oldText)) {
        dropdownContent.appendChild(newDropdownItem);
    }
    
    // Xóa mục đã chọn ra khỏi dropdown để tránh trùng lặp
    dropdownItems.forEach(item => {
        if (item.dataset.text === newText) {
            item.remove();
        }
    });

    closeDropdown(); // Đóng dropdown sau khi chọn
}

// Hàm để mở/đóng dropdown
function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = event.currentTarget.parentNode;
    dropdown.classList.toggle('active');
}

// Hàm để đóng tất cả các dropdown
function closeDropdown() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('active');
    });
}

// Đóng dropdown khi nhấp chuột ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.dropdown, .dropdown *')) {
        closeDropdown();
    }
}

//input contact
function validateForm() {
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const phoneFormatError = document.getElementById('phone-format-error');
    const emailError = document.getElementById('email-error');
    const emailFormatError = document.getElementById('email-format-error');

    // Đặt tất cả các thông báo lỗi về trạng thái ẩn ban đầu
    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    phoneFormatError.style.display = 'none';
    emailError.style.display = 'none';
    emailFormatError.style.display = 'none';

    // Đặt tất cả các ô nhập liệu về trạng thái mặc định
    fullname.classList.remove('valid', 'invalid');
    phone.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');

    let isValid = true;

    // Kiểm tra ô họ và tên
    if (!fullname.value.trim()) {
        nameError.style.display = 'block';
        fullname.classList.add('invalid');
        isValid = false;
    } else {
        fullname.classList.add('valid');
    }

    // Kiểm tra ô số điện thoại
    if (!phone.value.trim()) {
        phoneError.style.display = 'block';
        phone.classList.add('invalid');
        isValid = false;
    } else {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phoneFormatError.style.display = 'block';
            phone.classList.add('invalid');
            isValid = false;
        } else {
            phone.classList.add('valid');
        }
    }

    // Kiểm tra ô email
    if (!email.value.trim()) {
        emailError.style.display = 'block';
        email.classList.add('invalid');
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailFormatError.style.display = 'block';
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.add('valid');
        }
    }

    if (isValid) {
        showNotification('Successfully !');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
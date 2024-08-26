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

// seemore/hide filter
const toggleButton = document.getElementById('toggleButton');
const form4 = document.querySelector('.form-4');

toggleButton.addEventListener('click', function() {
  form4.classList.toggle('expanded');
  if (form4.classList.contains('expanded')) {
    toggleButton.textContent = '[-] Ẩn xem thêm';
  } else {
    toggleButton.textContent = '[+] Xem thêm';
  }
});
//arrange active
const arrangeItem = document.querySelectorAll('.arrange-item');

arrangeItem.forEach(item => {
    item.addEventListener('click', function() {   
        arrangeItem.forEach(i => i.classList.remove('active'));  
        this.classList.add('active');
    });
});
//highlights
document.getElementById("highlights-title-1").addEventListener("click", function() {
    document.getElementById("highlights-content-1").classList.toggle("shrink");
  });
  document.getElementById("highlights-title-2").addEventListener("click", function() {
    document.getElementById("highlights-content-2").classList.toggle("shrink");
  });
  document.getElementById("rotateIcon").addEventListener('click', function() {
    this.classList.toggle('rotate');
});

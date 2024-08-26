window.onscroll = function() {stickyMenu()};

// Lấy phần tử navbar
var navbar = document.getElementById("headerMain");

// Lấy vị trí offset của navbar
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

// Slide-show
const listImage = document.querySelector('.list-images')
const imgs = document.querySelectorAll('.imgs')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else{
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

let handleEvent = setInterval(handleChangeSlide, 4000)

arrowRight.addEventListener('click', () =>{
    clearInterval(handleEvent)
    handleChangeSlide()
    handleEvent = setInterval(handleChangeSlide, 4000)
})

arrowLeft.addEventListener('click', () =>{
    clearInterval(handleEvent)
    if (current == 0){
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else{
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
    handleEvent = setInterval(handleChangeSlide, 4000)
})

// filter-search
function showContainer(index) {
    // Ẩn tất cả các container
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.remove('active');
    });

    // Hiển thị container được chọn
    document.getElementById('container' + index).classList.add('active');


    // Xóa lớp active khỏi tất cả các item
    var items = document.querySelectorAll('.list-filter-menu li');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    // Thêm lớp active vào item được chọn
    document.getElementById('item' + index).classList.add('active');
}

    // Kích hoạt mục đầu tiên ban đầu
    document.getElementById('item1').classList.add('active');

///swap text
    document.getElementById('swap').addEventListener('click', function() {
        // Lấy các thẻ cần đổi chỗ
        let swaptext1 = document.getElementById('swaptext1');
        let swaptext2 = document.getElementById('swaptext2');
    
        // Lấy vị trí hiện tại của các thẻ
        let parent1 = swaptext1.parentNode;
        let sibling1 = swaptext1.nextSibling === swaptext2 ? swaptext1 : swaptext1.nextSibling;
    
        // Đổi chỗ hai thẻ
        swaptext2.parentNode.insertBefore(swaptext1, swaptext2.nextSibling);
        parent1.insertBefore(swaptext2, sibling1);
    });

//JS HEADER 
window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("headerMain");

var sticky = headerMain.offsetTop;

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
    let dropdownContent = document.querySelector('.dropdown-menu-content');
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
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('active');
    });
}

// Đóng dropdown khi nhấp chuột ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-menu, .dropdown-menu *')) {
        closeDropdown();
    }
}


//JS MAIN - TRANG CHỦ-----------------------------------------------------
// Slide-show ( MAIN + HOTEL)
const listImage = document.querySelector('.list-images')
const imgs = document.querySelectorAll('.imgs')
console.log(imgs)
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
    var containers = document.querySelectorAll('.container-index');
    containers.forEach(function(container) {
        container.classList.remove('active');
    });

    // Hiển thị container được chọn
    document.getElementById('containerIndex' + index).classList.add('active');


    // Xóa lớp active khỏi tất cả các item
    var items = document.querySelectorAll('.list-menu-index li');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    // Thêm lớp active vào item được chọn
    document.getElementById('itemIndex' + index).classList.add('active');
}

    // Kích hoạt mục đầu tiên ban đầu
    document.getElementById('itemIndex1').classList.add('active');


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

// JS AIRLINE TICKET - VE MAY BAY------------------------------------

//book-cheap-tickets
// select-box-3
function generateMonthOptions(selectElementId) {
    const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    const monthSelect = document.getElementById(selectElementId);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    for (let i = 0; i < 12; i++) {
        const option = document.createElement('option');
        const monthIndex = (currentMonth + i) % 12; // Đảm bảo chỉ số tháng nằm trong khoảng 0-11
        const year = currentYear + Math.floor((currentMonth + i) / 12); // Tính năm tương ứng
        option.value = `${monthIndex + 1}/${year}`;
        option.textContent = `${monthNames[monthIndex]} ${year}`;
        
        // Tìm hoặc tạo optgroup cho năm hiện tại
        let optgroup = monthSelect.querySelector(`optgroup[label="Năm ${year}"]`);
        if (!optgroup) {
            optgroup = document.createElement('optgroup');
            optgroup.label = `Năm ${year}`;
            monthSelect.appendChild(optgroup);
        }
        
        optgroup.appendChild(option);
    }
  }
  generateMonthOptions('monthSelect1');
// JS HOTEL - KHACH SAN -T1----------------------------------------

// const imageWrapper = document.querySelector('.image-wrapper-hotel');
// const leftIcon = document.querySelector('.left-icon-et');
// const rightIcon = document.querySelector('.right-icon-et');

// let currentIndex = 0;
// const cardWidth = document.querySelector('.image-card-et').offsetWidth + 
//                   parseInt(window.getComputedStyle(document.querySelector('.image-card-et')).marginLeft) + 
//                   parseInt(window.getComputedStyle(document.querySelector('.image-card-et')).marginRight);

// rightIcon.addEventListener('click', () => {
//   if (currentIndex < 3) { // Chỉ cho phép dịch chuyển tối đa 3 lần (7 - 4)
//     currentIndex++;
//     imageWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
//   }
// });

// leftIcon.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     imageWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
//   }
// });

// JS HOTEL ITEM - T2------------------------------------------------

// // seemore/hide filter
// const toggleButton = document.getElementById('toggleSeemoreHide');
// const form4 = document.querySelector('.form-4');

// toggleButton.addEventListener('click', function() {
//   form4.classList.toggle('expanded');
//   if (form4.classList.contains('expanded')) {
//     toggleButton.textContent = '[-] Ẩn xem thêm';
//   } else {
//     toggleButton.textContent = '[+] Xem thêm';
//   }
// });
// //arrange active
// const arrangeItem = document.querySelectorAll('.arrange-item');

// arrangeItem.forEach(item => {
//     item.addEventListener('click', function() {   
//         arrangeItem.forEach(i => i.classList.remove('active'));  
//         this.classList.add('active');
//     });
// });
// //highlights
// document.getElementById("highlights-title-1").addEventListener("click", function() {
//     document.getElementById("highlights-content-1").classList.toggle("shrink");
//   });
//   document.getElementById("highlights-title-2").addEventListener("click", function() {
//     document.getElementById("highlights-content-2").classList.toggle("shrink");
//   });
//   document.getElementById("rotateIcon").addEventListener('click', function() {
//     this.classList.toggle('rotate');
// });

// JS HOTEL BOOKING - T3-------------------------------------------------------

//slide-show

window.onload = function() {
    const slideWrapper = document.querySelector('.slide-wrapper-hotelbooking');
    const images = document.querySelectorAll('.slide-hotelbooking img');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function updateSlidePosition() {
        const imageWidth = images[0].clientWidth;
        slideWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 3) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    window.addEventListener('resize', updateSlidePosition);
};

//introduce-menu active
const introduceMenuItem = document.querySelectorAll('.introduce-menu-item');

introduceMenuItem.forEach(item => {
    item.addEventListener('click', function() {   
        introduceMenuItem.forEach(i => i.classList.remove('active'));  
        this.classList.add('active');
    });
});
//utilities shrink
document.getElementById("up-down").addEventListener("click", function() {
    document.getElementById("utilities-left").classList.toggle("shrink");
  });

  const basePrice = 1785000; // Giá tiền cố định
  const taxRate = 0.176;
  let quantity = 0;

  function updateDisplay() {
      // Hiển thị giá tiền cố định
      document.getElementById('price').innerText = basePrice.toLocaleString();

      if (quantity > 0) {
          const totalPrice = basePrice * quantity;
          const tax = basePrice * taxRate * quantity;
          const total = totalPrice + tax;

          document.getElementById('tax').innerText = tax.toLocaleString();
          document.getElementById('total').innerText = total.toLocaleString();

          document.getElementById('taxRow').style.display = 'block';
          document.getElementById('totalRow').style.display = 'block';
          document.getElementById('btnBookNow').style.display = 'flex';
          document.getElementById('roomCount').innerText = `${quantity} /room${quantity > 1 ? 's' : ''}/night`;
      } else {
          document.getElementById('taxRow').style.display = 'none';
          document.getElementById('totalRow').style.display = 'none';
          document.getElementById('btnBookNow').style.display = 'none';
          document.getElementById('roomCount').innerText = '/phòng/đêm';
      }

      document.getElementById('quantity').innerText = quantity;

      document.getElementById('decreaseButton').disabled = (quantity === 0);
  }

  function increase() {
      quantity++;
      updateDisplay();
  }

  function decrease() {
      if (quantity > 0) {
          quantity--;
          updateDisplay();
      }
  }

  updateDisplay();
// JS HOTEL DETAIL - T4------------------------------------------------------

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


// JS TOUR - TOUR DU LICH -T1-------------------------------------------------

// JS TOUR BOOKING -T2--------------------------------------------------------
    
  // JS TOUR DETAIL -T2---------------------------------------------------------
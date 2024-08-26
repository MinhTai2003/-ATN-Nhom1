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

//slide-show

window.onload = function() {
    const slideWrapper = document.querySelector('.slide-wrapper');
    const images = document.querySelectorAll('.slide img');
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


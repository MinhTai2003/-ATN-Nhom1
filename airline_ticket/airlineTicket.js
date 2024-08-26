window.onscroll = function() {stickyMenu()};

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

// drop down
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

//
document.getElementById("toggle-question-1").addEventListener("click", function() {
  document.getElementById("question-item-1").classList.toggle("shrink");
});
document.getElementById("toggle-question-2").addEventListener("click", function() {
  document.getElementById("question-item-2").classList.toggle("shrink");
});
document.getElementById("toggle-question-3").addEventListener("click", function() {
  document.getElementById("question-item-3").classList.toggle("shrink");
});
document.getElementById("toggle-question-4").addEventListener("click", function() {
  document.getElementById("question-item-4").classList.toggle("shrink");
});
document.getElementById("toggle-question-5").addEventListener("click", function() {
  document.getElementById("question-item-5").classList.toggle("shrink");
});
document.getElementById("toggle-question-6").addEventListener("click", function() {
  document.getElementById("question-item-6").classList.toggle("shrink");
});
document.getElementById("toggle-question-7").addEventListener("click", function() {
  document.getElementById("question-item-7").classList.toggle("shrink");
});
document.getElementById("toggle-question-8").addEventListener("click", function() {
  document.getElementById("question-item-8").classList.toggle("shrink");
});
document.getElementById("toggle-question-9").addEventListener("click", function() {
  document.getElementById("question-item-9").classList.toggle("shrink");
});
document.getElementById("toggle-question-10").addEventListener("click", function() {
  document.getElementById("question-item-10").classList.toggle("shrink");
});


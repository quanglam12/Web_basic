let currentPage = 1; // Trang hiện tại, thay đổi theo trang hiện tại của bạn
  const totalPages = 13; // Tổng số trang, thay đổi theo số lượng sản phẩm của bạn
  const visiblePages = 5; // Số lượng nút số trang hiển thị
  let products = [
{ id: 1, name: 'Sản phẩm 1', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 2, name: 'Sản phẩm 2', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 3, name: 'Sản phẩm 3', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 4, name: 'Sản phẩm 4', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 5, name: 'Sản phẩm 5', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 6, name: 'Sản phẩm 6', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 7, name: 'Sản phẩm 7', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 8, name: 'Sản phẩm 8', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 9, name: 'Sản phẩm 9', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 10, name: 'Sản phẩm 10', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 11, name: 'Sản phẩm 11', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 12, name: 'Sản phẩm 12', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 13, name: 'Sản phẩm 13', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 14, name: 'Sản phẩm 14', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' },
{ id: 15, name: 'Sản phẩm 15', imageUrl: 'đường_dẫn_ảnh_1.jpg', price:'1' }
];
  const productsPerPage = 10;

function setupPagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = ''; // Xóa các nút hiện tại trước khi thêm nút mới

  // Thêm nút 'First' và 'Prev'
  paginationElement.appendChild(createPageButton('First', 1));
  paginationElement.appendChild(createPageButton('<', Math.max(1, currentPage - 1)));

  // Xác định số trang đầu và cuối để hiển thị
  let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  // Điều chỉnh nếu số trang cuối cùng không đủ
  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  // Thêm các nút số trang
  for (let i = startPage; i <= endPage; i++) {
    paginationElement.appendChild(createPageButton(i, i, i === currentPage));
  }

  // Thêm dấu chấm lửng nếu cần
  if (endPage < totalPages) {
    const ellipsis = document.createElement('li');
    ellipsis.textContent = '...';
    paginationElement.appendChild(ellipsis);
  }

  // Thêm nút trang cuối cùng nếu cần
  if (endPage < totalPages - 1) {
    paginationElement.appendChild(createPageButton(totalPages, totalPages));
  }

  // Thêm nút 'Next' và 'Last'
  paginationElement.appendChild(createPageButton('>', Math.min(totalPages, currentPage + 1)));
  paginationElement.appendChild(createPageButton('Last', totalPages));
}

function createPageButton(text, page, isActive) {
  const button = document.createElement('li');
  button.href = '#';
  button.textContent = text;
  button.onclick = function() { changePage(page); };
  if (isActive) {
    button.className = 'active';
  }
  return button;
}
function displayProducts(page) {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  const productListElement = document.getElementById('items');
  productListElement.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại

  for (const product of productsToShow) {
    const productElement = document.createElement('div');
    productElement.className = 'item';
    productElement.innerHTML = `
      <a href="#">
        <img src ="${product.imageUrl}" title="${product.name}" alt="${product.name}">
      </a>
      <div class="ProductsCaption">
        <div class="ProductsName">
          <a href="#">${product.name}</a>
        </div>
        <div class="ProductsPrice">
          <p>${product.price}$</p>
        </div>
        <div class="ProductsAction">
          <div>
            <button>Thêm vào giỏ hàng <i class="fa fa-shopping-cart" style="font-size:20px"></i></button>
          </div>
          <div>
            <input type="checkbox" id="${product.id}"><label for="${product.id}">Quan tâm</label>
          </div>
        </div>
      </div>
    `;
    productListElement.appendChild(productElement);
  }

  document.getElementById('page-number').textContent = page;
}
function changePage(page) {
  currentPage = page;
  setupPagination();
  displayProducts(currentPage);
}


// Khởi tạo phân trang khi trang web tải xong
window.onload = () => { 
  setupPagination();
  displayProducts(currentPage);
 
};
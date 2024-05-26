import React from 'react'
const [showModal, setShowModal] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const handleDeleteClick = (item) => {
  setSelectedItem(item);
  setShowModal(true);
};

const handleConfirmDelete = () => {
  if (selectedItem) {
    onDelete(selectedItem); // Gọi callback function để thực hiện xóa
    setShowModal(false);
  }
};

const handleCancelDelete = () => {
  setShowModal(false);
};

export default function Delete() {
  return (
    <div>
        {/* Hiển thị danh sách dữ liệu cần xóa */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteClick(item)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Hiển thị modal xác nhận xóa */}
      {showModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={handleCancelDelete} />
            </div>
            <div className="modal-body-custom">
              <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={handleCancelDelete}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={handleConfirmDelete}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

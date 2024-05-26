import React,{useState} from 'react'

export default function Header() {
    const [showEmployeeForm, setShowEmployeeForm] = useState(false);

  const handleAddEmployee = () => {
    setShowEmployeeForm(true);
  };

  const handleCloseEmployeeForm = () => {
    setShowEmployeeForm(false);
  };
  return (
    <div>
        <header className="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button className="btn btn-primary" onClick={handleAddEmployee}>Thêm mới nhân viên</button>
      </header>
      {showEmployeeForm && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thêm mới nhân viên</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseEmployeeForm}
                ></button>
              </div>
              <div className="modal-body">
                {/* Nội dung của form thêm mới nhân viên */}
                <form>
                  {/* Các trường dữ liệu của nhân viên */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseEmployeeForm}
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import React from 'react'

export default function List() {
  return (
    <div>
        <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>28/02/1990</td>
            <td>nvana@gmail.com</td>
            <td>Ba Đình, Hà Nội</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="status status-active" />
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span className="button button-block">Chặn</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete">Xóa</span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>15/07/1985</td>
            <td>ttb@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="status status-stop" />
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span className="button button-block">Bỏ chặn</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete">Xóa</span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lê Văn C</td>
            <td>03/10/2000</td>
            <td>lvc@gmail.com</td>
            <td>Hai Bà Trưng, Hà Nội</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="status status-stop" />
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span className="button button-block">Bỏ chặn</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete">Xóa</span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Phạm Thị D</td>
            <td>20/05/1995</td>
            <td>ptd@gmail.com</td>
            <td>Hoàn Kiếm, Hà Nội</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="status status-active" />
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span className="button button-block">Chặn</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete">Xóa</span>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ngô Văn E</td>
            <td>12/11/1988</td>
            <td>nve@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="status status-active" />
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span className="button button-block">Chặn</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete">Xóa</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

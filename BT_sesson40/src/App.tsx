import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Form from './components/Form'
import Block from './components/Block'
import Delete from './components/Delete'
export default function App() {
  return (
    <div>
      <>
  <div className="w-[80%] m-auto mt-4 h-[100vh]">
    <main className="main">
      <Header></Header>
      <Search></Search>
      {/* Danh sách nhân viên */}
      <List></List>
      <footer className="d-flex justify-content-end align-items-center gap-3">
        <select className="form-select">
          <option >Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </footer>
    </main>
  </div>
  {/* Form thêm mới nhân viên */}
  <Form></Form>
  {/* Modal xác nhận chặn tài khoản */}
  <Block></Block>
  {/* Modal xác nhận xóa tài khoản */}
  <Delete></Delete>
</>

    </div>
  )
}

import React from 'react'
import TodoForm from './components/TodoForm'
import Checkbox from './components/Checkbox'
import TodoList from './components/TodoList'
import Delete from './components/Delete'
import Confirm from './components/Confirm'

export default function App() {
  return (
    <div>
      <>
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <TodoForm></TodoForm>
              {/* Tabs navs */}
              <Checkbox></Checkbox>
              {/* Tabs navs */}
              {/* Tabs content */}
             <TodoList></TodoList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Modal xác nhận xóa */}
  <Delete></Delete>
  {/* Modal cảnh báo lỗi */}
  <Confirm></Confirm>
</>

    </div>
  )
}

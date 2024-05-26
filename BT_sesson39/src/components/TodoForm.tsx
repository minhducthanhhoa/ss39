import React,{useState} from 'react'
interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }

export default function TodoForm() {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTask: Task = {
        id: Date.now().toString(),
        title: title,
        description: description,
        completed: false,
      };
      // Gọi hàm từ component cha để thêm công việc mới
      onAddTask(newTask);
      setTitle('');
      setDescription('');
    }
  };

  const onAddTask: (task: Task) => void = (task) => {
    // Gọi hàm từ component cha để thêm công việc mới
    console.log('New task added:', task);
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                  <input onChange={(e) =>setTitle(e.target.value)} type="text" id="form2" className="form-control" />
                  <label className="form-label" htmlFor="form2">
                    Nhập tên công việc
                  </label>
                </div>
                <button type="submit" className="btn btn-info ms-2">
                  Thêm
                </button>
              </form>
    </div>
  )
}

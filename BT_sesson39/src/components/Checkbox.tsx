import React,{useState} from 'react'

interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }

export default function Checkbox() {
    const [tasks, setTasks] = useState<Task[]>([]);
  const [filterOption, setFilterOption] = useState<'all' | 'completed' | 'incomplete'>('all');

  const handleTaskComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (option: 'all' | 'completed' | 'incomplete') => {
    setFilterOption(option);
  };

  const filteredTasks = () => {
    switch (filterOption) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'incomplete':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };
  return (
    <div>
        <ul className="nav nav-tabs mb-4 pb-2">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${filterOption === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            Tất cả
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${filterOption === 'completed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('completed')}
          >
            Đã hoàn thành
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${filterOption === 'incomplete' ? 'active' : ''}`}
            onClick={() => handleFilterChange('incomplete')}
          >
            Chưa hoàn thành
          </a>
        </li>
      </ul>

      <ul>
        {filteredTasks().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

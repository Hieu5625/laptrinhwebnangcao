export function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => toggleTaskCompletion(index)}
                    >
                        {task.task}
                    </span>
                    <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
  }
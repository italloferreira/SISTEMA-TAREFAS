import { Calendar } from "lucide-react";
import "../styles/taskList.css";

function TaskList({ tasks }) {
  function getStatusClass(status) {
    if (status === "Pendente") {
      return "pending";
    }

    if (status === "Em andamento") {
      return "progress";
    }

    if (status === "Concluída") {
      return "done";
    }

    return "";
  }

  return (
    <section className="task-list-card">
      <h2>Tarefas de hoje</h2>

      <div className="task-list-header">
        <span>Tarefa</span>
        <span>Categoria</span>
        <span>Status</span>
        <span>Prazo</span>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-row" key={task.id}>
            <div className="task-name">
              <button type="button" className="task-check"></button>
              <span>{task.title}</span>
            </div>

            <span className="task-category">{task.category}</span>

            <span className={`task-status ${getStatusClass(task.status)}`}>
              {task.status}
            </span>

            <div className="task-deadline">
              <Calendar size={17} />
              <span>{task.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskList;
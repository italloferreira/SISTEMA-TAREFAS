import { Calendar } from "lucide-react";
import "../styles/taskList.css";

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Estudar React",
      category: "Estudos",
      status: "Em andamento",
      deadline: "24 mai",
    },
    {
      id: 2,
      title: "Finalizar atividade de API",
      category: "Projeto pessoal",
      status: "Pendente",
      deadline: "26 mai",
    },
    {
      id: 3,
      title: "Organizar rotina da semana",
      category: "Pessoal",
      status: "Pendente",
      deadline: "27 mai",
    },
    {
      id: 4,
      title: "Revisar código do projeto",
      category: "Projeto pessoal",
      status: "Em andamento",
      deadline: "28 mai",
    },
    {
      id: 5,
      title: "Ler capítulo do livro",
      category: "Estudos",
      status: "Concluída",
      deadline: "30 mai",
    },
  ];

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
              <button className="task-check"></button>
              <span>{task.title}</span>
            </div>

            <span className="task-category">{task.category}</span>

            <span
              className={`task-status ${
                task.status === "Pendente"
                  ? "pending"
                  : task.status === "Em andamento"
                  ? "progress"
                  : "done"
              }`}
            >
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
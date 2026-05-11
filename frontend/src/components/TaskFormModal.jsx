import { X } from "lucide-react";
import { useState } from "react";
import "../styles/taskFormModal.css";

function TaskFormModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Pessoal");
  const [status, setStatus] = useState("Pendente");
  const [deadline, setDeadline] = useState("");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Digite o nome da tarefa.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      category,
      status,
      deadline: formatDeadline(deadline),
    };

    onAddTask(newTask);

    setTitle("");
    setCategory("Pessoal");
    setStatus("Pendente");
    setDeadline("");

    onClose();
  }

  function formatDeadline(date) {
    if (!date) {
      return "Sem prazo";
    }

    const months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];

    const [, month, day] = date.split("-");

    return `${Number(day)} ${months[Number(month) - 1]}`;
  }

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <div className="task-modal-header">
          <h2>Nova tarefa</h2>

          <button type="button" className="modal-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Nome da tarefa</label>
            <input
              id="title"
              type="text"
              placeholder="Ex: Estudar React"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Projeto pessoal">Projeto pessoal</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluída">Concluída</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Prazo</label>
            <input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>

            <button type="submit" className="save-button">
              Salvar tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormModal;
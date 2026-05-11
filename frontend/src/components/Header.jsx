import { Plus } from "lucide-react";
import "../styles/header.css";

function Header({ onOpenTaskModal }) {
  return (
    <header className="header">
      <h1>Minhas tarefas</h1>

      <button
        type="button"
        className="new-task-button"
        onClick={onOpenTaskModal}
      >
        <Plus size={18} />
        Nova tarefa
      </button>
    </header>
  );
}

export default Header;
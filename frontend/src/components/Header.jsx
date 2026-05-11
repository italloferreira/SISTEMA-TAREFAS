import { Plus } from "lucide-react";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1>Minhas tarefas</h1>

      <button type="button" className="new-task-button">
        <Plus size={18} />
        Nova tarefa
      </button>
    </header>
  );
}

export default Header;
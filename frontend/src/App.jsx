import { useState } from "react";
import { ClipboardList, CheckCircle } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import TaskList from "./components/TaskList";
import TaskFormModal from "./components/TaskFormModal";

import "./styles/app.css";

function App() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [tasks, setTasks] = useState([
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
  ]);

  const pendingTasks = tasks.filter((task) => task.status !== "Concluída").length;
  const completedTasks = tasks.filter((task) => task.status === "Concluída").length;

  function handleOpenTaskModal() {
    setIsTaskModalOpen(true);
  }

  function handleCloseTaskModal() {
    setIsTaskModalOpen(false);
  }

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  return (
    <div className="app">
      <Sidebar />

      <main className="app-content">
        <Header onOpenTaskModal={handleOpenTaskModal} />

        <section className="summary-grid">
          <SummaryCard
            title="Pendentes"
            value={pendingTasks}
            icon={ClipboardList}
          />

          <SummaryCard
            title="Concluídas"
            value={completedTasks}
            icon={CheckCircle}
          />
        </section>

        <TaskList tasks={tasks} />
      </main>

      <TaskFormModal
        isOpen={isTaskModalOpen}
        onClose={handleCloseTaskModal}
        onAddTask={handleAddTask}
      />
    </div>
  );
}

export default App;
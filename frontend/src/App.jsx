import { ClipboardList, CheckCircle } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import TaskList from "./components/TaskList";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="app-content">
        <Header />

        <section className="summary-grid">
          <SummaryCard title="Pendentes" value="0" icon={ClipboardList} />
          <SummaryCard title="Concluídas" value="0" icon={CheckCircle} />
        </section>

        <TaskList />
      </main>
    </div>
  );
}

export default App;
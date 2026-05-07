import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="app-content">
        <Header />

        <section>
          <p>Depois vamos colocar os cards e a lista de tarefas aqui.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
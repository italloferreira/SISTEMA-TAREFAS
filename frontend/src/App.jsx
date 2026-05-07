import Sidebar from "./components/Sidebar";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="app-content">
        <h1>Área principal</h1>
        <p>Depois vamos construir essa parte.</p>
      </main>
    </div>
  );
}

export default App;
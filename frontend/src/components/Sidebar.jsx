import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Settings,
} from "lucide-react";

import "../styles/sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Tarefas",
      icon: CheckSquare,
      active: false,
    },
    {
      name: "Calendário",
      icon: Calendar,
      active: false,
    },
    {
      name: "Configurações",
      icon: Settings,
      active: false,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <CheckSquare size={22} />
        </div>

        <div>
          <h1>TaskFlow</h1>
          <span>Gerenciador</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`sidebar-menu-item ${item.active ? "active" : ""}`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
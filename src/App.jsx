import { useState } from "react";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("counter");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      
      {/* SIDEBAR: Solid, Dark, Professional */}
      <aside className="sidebar">
        <div className="brand">
          {/* UPDATED TEXT HERE */}
          <span>FSD-2 LAB</span>
        </div>

        <nav className="nav-menu">
          <div className="nav-header">MAIN MENU</div>
          
          <button 
            className={`nav-item ${activeTab === "counter" ? "active" : ""}`} 
            onClick={() => setActiveTab("counter")}
          >
            📊 Dashboard
          </button>
          
          <button 
            className={`nav-item ${activeTab === "todo" ? "active" : ""}`} 
            onClick={() => setActiveTab("todo")}
          >
            ✅ Tasks
          </button>
          
          <button 
            className={`nav-item ${activeTab === "form" ? "active" : ""}`} 
            onClick={() => setActiveTab("form")}
          >
            📝 User Form
          </button>

          <div className="nav-header">SYSTEM</div>
          
          <button 
            className={`nav-item ${activeTab === "theme" ? "active" : ""}`} 
            onClick={() => setActiveTab("theme")}
          >
            🎨 Appearance
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-header">
          <h2 className="page-title">
            {activeTab === "counter" && "Overview"}
            {activeTab === "todo" && "Task Management"}
            {activeTab === "form" && "User Registration"}
            {activeTab === "theme" && "Settings"}
          </h2>
          <div style={{fontWeight: 500, color: '#64748b'}}>Admin User ▾</div>
        </header>

        <div className="workspace">
          {activeTab === "counter" && <CounterExp />}
          {activeTab === "todo" && <TodoExp />}
          {activeTab === "theme" && <ThemeExp isDark={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />}
          {activeTab === "form" && <FormExp />}
        </div>
      </main>
    </div>
  );
}

// --- Experiment 1: Counter ---
function CounterExp() {
  const [count, setCount] = useState(0); 
  return (
    <div className="dashboard-grid">
      <div className="card stat-card">
        {/* Cleaned text below */}
        <span style={{color: '#64748b', fontSize: '0.9rem', fontWeight: 600}}>
          CURRENT COUNT
        </span>
        <div className="big-number">{count}</div>
      </div>
      
      <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h3 style={{margin: '0 0 20px 0'}}>Actions</h3>
        <div style={{display: 'flex', gap: '10px'}}>
          <button className="btn primary" onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button className="btn outline" onClick={() => setCount(count - 1)}>Decrement (-)</button>
          <button className="btn danger" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
// --- Experiment 2: To-Do ---
function TodoExp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Review Design Specs", "Commit Code to GitHub"]); 

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]); 
    setTask("");
  };

  return (
    <div className="card" style={{maxWidth: '800px'}}>
      <div style={{display: 'flex', gap: '10px', alignItems: 'flex-end'}}>
        <div style={{flex: 1}}>
          <label style={{fontSize: '0.85rem', fontWeight: 600, color: '#64748b'}}>NEW TASK</label>
          <input 
            className="desktop-input"
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="What needs to be done?" 
          />
        </div>
        <button className="btn primary" style={{marginBottom: '16px', height: '46px'}} onClick={addTask}>Add</button>
      </div>

      <div style={{marginTop: '20px'}}>
        {tasks.map((t, i) => (
          <div key={i} style={{padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center'}}>
             <span style={{marginRight: '10px', color: '#3b82f6'}}>✔</span>
             {t}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Experiment 3: Theme Toggle ---
function ThemeExp({ isDark, toggleTheme }) {
  return (
    <div className="card" style={{maxWidth: '600px'}}>
      <h3>Display Settings</h3>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px'}}>
        <div>
          <div style={{fontWeight: 600}}>Dark Mode</div>
          <div style={{fontSize: '0.9rem', color: '#64748b'}}>Switch between light and dark themes</div>
        </div>
        <button className="btn outline" onClick={toggleTheme}>
          {isDark ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </div>
  );
}

// --- Experiment 4: Form ---
function FormExp() {
  const [name, setName] = useState(""); 
  return (
    <div className="card" style={{maxWidth: '500px'}}>
      <h3>User Profile</h3>
      <label style={{fontSize: '0.85rem', fontWeight: 600, color: '#64748b'}}>FULL NAME</label>
      <input 
        className="desktop-input"
        placeholder="Enter your name" 
        onChange={(e) => setName(e.target.value)} 
      />
      {name && (
        <div style={{marginTop: '10px', padding: '10px', background: '#eff6ff', borderRadius: '6px', color: '#1e40af'}}>
          User detected: <strong>{name}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
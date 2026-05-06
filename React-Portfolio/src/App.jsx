import { useState } from "react";

// Importing child components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { title: "Project 1", description: "To do list project"},
    { title: "Project 2", description: "BlackOps project"},
    { title: "Project 3", description: "React project"},
  ]);


const [searchTerm, setSearchTerm] = useState("");

// function to add new project
const handleAddProject = (project) => {
  setProjects([...projects, project]);
};

// filtering projects
const filteredProjects = projects.filter((p) =>
p.title.toLowerCase().includes(searchTerm.toLowerCase()));

return (
  <div className="container">
    
    <Header />

    <ProjectForm onAddProject={handleAddProject} />

    <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />

    <ProjectList projects={filteredProjects} />

  </div>
)

}

export default App;
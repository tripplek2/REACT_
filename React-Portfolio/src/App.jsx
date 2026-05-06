import { useState } from "react";

// Importing child components
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setprojects] = useState([
    { title: "Project 1", description: "To do list project"},
    { title: "Project 2", description: "BlackOps project"},
    { title: "Project 3", description: "React project"},
  ]);
}


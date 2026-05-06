import { useState } from "react";
 
function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
//    Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // validation
        if (!title || !description) return;

        onAddProject({ title, description });

    }
}
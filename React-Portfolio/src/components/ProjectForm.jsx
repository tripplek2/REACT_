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

        // clearing inputs after submitting
        setTitle("");
        setDescription("");

    };

    return (
        <div className="card">
            <h2>Add Project</h2>

            <form onSubmit={handleSubmit}>

                // title input
                <label>Title</label>
                <input 
                   type="text"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)} 
                />
                // description input
                <label>Description</label>
                <textarea 
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
                
                />
                // submit button
                <button type="submit">Add</button>

            </form>

        </div>
    )
}

export default ProjectForm;
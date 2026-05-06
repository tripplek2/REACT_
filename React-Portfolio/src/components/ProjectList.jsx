import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    if (projects.length === 0) {
        return <p>No projects found</p>;
    }

    return (
        <div className="card">
        // looping
          {projects.map((project, index) => (
            
        // Rendering a project card for each project
          <ProjectCard
            key={index}
            project={project}
           />
        ))}

        </div>
    );
}

export default ProjectList;
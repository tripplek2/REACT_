function ProjectCard({ project }) {
    return (
        <div className="item">

            <div className="img">🖼️</div>

            {/* project details */}
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>

        </div>
    );
}

export default ProjectCard;
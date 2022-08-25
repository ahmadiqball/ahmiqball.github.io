import './ProjectCard.css';

const ProjectCard = (props) => {
    const data = props.projectData;

    return (
        <a className="project" href={data.projectLink}>
            <img src={data.projectImg} alt="project-img"/>
            <div className="project-desc">
                <h4>{data.projectName}</h4>
                <h5>{data.projectType}</h5>
                <p>{data.projectDate}</p>
            </div>
        </a>
    )
}

export default ProjectCard;
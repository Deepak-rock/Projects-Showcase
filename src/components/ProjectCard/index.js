import './index.css'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <li className="project-item">
      <img src={imageUrl} alt={name} className="project-img" />
      <p className="project-name">{name}</p>
    </li>
  )
}

export default ProjectCard

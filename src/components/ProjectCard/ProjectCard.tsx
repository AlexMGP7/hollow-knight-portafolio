// src/components/ProjectCard.tsx
import type { FC } from 'react'
import type { Project } from '../../models/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, username, email } = project

  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p><strong>Usuario:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      {/* Podrías poner un link de GitHub, demo, etc. */}
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver proyecto
      </a>
    </div>
  )
}

export default ProjectCard

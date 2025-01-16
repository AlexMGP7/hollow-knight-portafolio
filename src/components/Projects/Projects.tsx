// src/components/Projects.tsx
import { useState, useEffect, useCallback, useMemo } from 'react'
import type { FC, ChangeEvent } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import type { Project } from '../../models/project'

const Projects: FC = () => {
  const [data, setData] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Hubo un error en la conexión')
      }
      const result = await response.json()
      setData(result)
      setError('')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Error desconocido')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Filtra la data según el campo "search"
  const filteredData = useMemo(() => {
    return data.filter(project =>
      project.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [data, search])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  if (loading) {
    return (
      <section id="projects" className="container">
        <h2>Proyectos</h2>
        <p>Cargando...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="container">
        <h2>Proyectos</h2>
        <p>Error: {error}</p>
      </section>
    )
  }

  return (
    <section id="projects" className="container">
      <h2>Proyectos</h2>

      {/* Input para filtrar por nombre */}
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="search">Buscar por nombre: </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Escribe algo..."
        />
      </div>

      <div className="grid">
        {filteredData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

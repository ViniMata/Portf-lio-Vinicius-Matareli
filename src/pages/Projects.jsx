import { useState } from "react";
import projects from "../data/projetos.json"; 
import Project from "../components/Project.jsx"; 

export default function Projects() {
    const [search, setSearch] = useState(""); 

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-6">Meus Projetos</h1>
            <input
                className="text-black border p-2 rounded w-full mb-4"
                type="text"
                id="search"
                placeholder="Buscar projetos..."
                value={search}
                onChange={handleSearch} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}

import { Link } from "react-router-dom"

export default function Project({id,name,imagem}) {
    return (
        <>
        <div>
            <h2>{name}</h2>
            <img src={imagem}/>
            <Link to={`/projetos/${id}`}>Saiba Mais</Link>
        </div>
        
        </>
    )
}
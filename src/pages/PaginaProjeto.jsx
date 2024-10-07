import { useParams } from "react-router-dom";


export default function PaginaProjeto({name, descricao, link, stack}){
    const {id} = useParams()
    return(
        
        <>
        <div className="text-white">
        <p>id: {id}</p>
        <h1>Nome: {name}</h1>
        <p>Descrição: {descricao}</p>
        <p>Link: {link}</p>
        <p>Stack: {stack}</p>
        </div>
        
        </>
    )
}
import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMsqlServer,
    DiReact,
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const tecnologies = [
    {id:"html", name: "HTML5", icon: <DiHtml5/>, progressoht:<progress value="90" max="100"/>},
    {id:"css", name: "CSS3", icon: <DiCss3/>, progressocs:<progress value="89" max="100"/>},
    {id:"js", name: "JavaScript", icon: <DiJsBadge/>, progressojs:<progress value="70" max="100"/>},
    {id:"node", name: "Node.js", icon: <DiNodejsSmall/>, progressond:<progress value="68" max="100"/>},
    {id:"sql", name: "SQL Server", icon: <DiMsqlServer/>, progressosq:<progress value="76" max="100"/> },
    {id:"react", name: "React", icon: <DiReact/>,progressorc:<progress value="65" max="100"/>},
]

const TecnologiesContainer = () => {
    return (
        <section className='tecnologies-container'>
            <h2>Tecnologias</h2>
            <div className='tecnologies-grid'>
                {tecnologies.map((tech) => (
                    <div className="tecnologi-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecnologi-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.progressoht}</p>
                            <p>{tech.progressocs}</p>
                            <p>{tech.progressojs}</p>
                            <p>{tech.progressond}</p>
                            <p>{tech.progressosq}</p>
                            <p>{tech.progressorc}</p>    
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}




export default TecnologiesContainer
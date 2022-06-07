import react from "react";
import reactDom from "react-dom";
import VideoJS from "./VideoJS";
import { useParams } from "react-router-dom";
import { getProject } from "../data";

function ProjectPage(props) {

    let params = useParams();
    const project = getProject(params.id);



    return <>
        <div className = "header">

            <h1>{ project.name }</h1>
            <p className="description">{ project.description }</p>

        </div>

        {/* <VideoJS src={project.videoLink} poster={project.name} /> */}

        <div>
        <iframe width="560" height="315" 
        src={project.videoLink} 
        title="YouTube video player" 
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />
        </div>

        <div className="technologies">
            {/* <h3>Technologies</h3>
            <ul>
                {project.techlist.map((technology) =>
                <li key={project.name} >
                    { project.name }
                </li>)}
            </ul> */}
            <a href={project.github}><button className="gitButton" onClick="">
                GitHub Repo
            </button>
            </a>
        </div>
       

    </>
}

export default ProjectPage;

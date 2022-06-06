import react from "react";
import reactDom from "react-dom";
import Project from "./Project";
import VideoJS from "./VideoJS";

function ProjectPage(props) {

    this.items = props



    return <>
        <div className = "header">

            <h1>{ props.name }</h1>
            <p className="description">{ props.desc }</p>

        </div>

        <VideoJS src="https://youtu.be/Yqm0ZI0612M" poster={props.name} />

        <div className="technologies">
            <h3>Technologies</h3>
            <ul>
                {props.techlist.map((technology) =>
                <li key={props.name} >
                    { props.name }
                </li>)}
            </ul>
            <button className="gitButton">
                GitHub Repo
            </button>
        </div>
       

    </>
}

export default ProjectPage;

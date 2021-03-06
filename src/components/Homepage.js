import React from "react";
import Project from './Project';
import { getData } from "../data";
import profileImage from "../img/selfie.jpg"

let style = {width: "50%"};

function Homepage() {

    const data = getData();

    return <div id="homepage">
        <div id="bio">
            <div id="selfie-container">
            <img id="selfie" src={profileImage} alt="selfie picture of myself"></img>
            </div>
            
            <p className="bioText" id = "personalName">Joel Giladi</p>
            <p className="bioText">Recently graduated Software Developer with 2 years experience of school and freelance work.
            <br></br>
            <br></br> 
            I have familiarity with both front end and back end development on both web and mobile platforms.</p>
            <p className="bioText">Contact: 
            <br></br>
            Email: giladij@icloud.com
            <br></br>
            Phone: (778)-707-2522
            </p>
        </div>
        <div id="projectsContainer">
            <h1 id="projectsHead">Projects</h1>

            {data.map((project) => {
                return(
                <Project key={project.id} id={project.id} name={project.name} languages={project.languages} description={project.description} programs={project.programs} image = {project.image} platforms={project.platforms} />);
            })}
        </div>
    </div>
}

export default Homepage;
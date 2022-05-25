import React from "react";
import ReactDOM from 'react-dom';
import Project from './Project';
import getData from '../data.js'

function Homepage() {

    const data = getData();

    return <div id="homepage">
        <div id="bio">
            <div id="selfie-container">
            <img id="selfie" src="images/selfie.jpg" alt="selfie picture of myself"></img>
            </div>
            
            <p className="bioText" id = "personalName">Joel Giladi</p>
            <p className="bioText">Software Developer with 2 years experience. 
            <br></br>
            <br></br> 
            Familiarity with both front end and back end development.</p>
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
                return(<Project key={project.name} name={project.name} languages={project.languages} description={project.description} programs={project.programs} platforms={project.platforms} />);
            })}
            {/* <Project name="katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/> */}
        </div>
    </div>
}

export default Homepage;
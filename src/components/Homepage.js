import React from "react";
import ReactDOM from 'react-dom';
import Project from './Project';

function Homepage() {
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
            <Project name="katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
            <Project name="Katching" languages={["Java", "XML"]} description = {"description"} programs={["Android Studio"]} platforms={["Windows", "MacOS", "Android"]}/>
        </div>
    </div>
}

export default Homepage;
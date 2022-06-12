import React from "react";
import Project from './Project';
import { getData } from "../data";

function Homepage() {

    const data = getData();

    return <div id="homepage">
        <div id="bio">
            <div id="selfie-container">
<<<<<<< HEAD
            <img id="selfie" src="../images/selfie.jpg" alt="selfie picture of myself"></img>
=======
            <img id="selfie" src="../../images/selfie.jpg" alt="selfie myself"></img>
>>>>>>> 56c0161b05694b66c45c756e47da60a778af79a1
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
                return(<Project key={project.id} id={project.id} name={project.name} languages={project.languages} description={project.description} programs={project.programs} platforms={project.platforms} />);
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
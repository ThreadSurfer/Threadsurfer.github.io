import React from "react";
import ReactDOM from 'react-dom';

function Project(props) {
    return (
        <div id={props.name} class="project">
            <img className = "projectImage" src={"images/" + props.name + ".jpg"} alt={props.name}></img>
            <h3 id="projectTitle">{props.name}</h3>
            <p class="projectDescription">
                {props.description}
            </p>
            {
            // This method below will check to see how many languages have been entered, and set a comma on each except the last one 
            }
            <p>languages : {
            
            props.languages.map(language => {
                if(props.languages.indexOf(language) === props.languages.length - 1) {
                    return language;
                }
                else {
                    return language + ", ";
                }
            })
            
            }</p>
            <p>Required programs: {
            
            props.programs.map(program => {
                if(props.programs.indexOf(program) === props.programs.length - 1) {
                    return program;
                }
                else {
                    return program + ", ";
                }
            })
            
            
            }</p>
            <p>Platforms: {
            
            props.platforms.map(platform => {
                if(props.platforms.indexOf(platform) === props.platforms.length - 1) {
                    return platform;
                }
                else {
                    return platform + ", ";
                }
            })
            
            
            }</p>
        </div>
    );
    
    
}

function displayList(itemList) {
        itemList. map(item => {
            if(itemList.indexOf(item) === itemList.length - 1) {
                return item;
            }
            else {
                return item + ", ";
            }
    })
}

    export default Project;